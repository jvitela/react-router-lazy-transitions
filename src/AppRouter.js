import _noop from "lodash.noop";
import _isFunction from "lodash.isfunction";
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  // BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { tryAtMost } from "Utils";

export const AnimationApp = ({
  routes,
  animation,
  onError,
  onLoading,
} = {}) => {
  const location = useLocation();
  const [activePage, setState] = useState({});
  const { Component, props } = activePage;
  const key = (props && props.location.key) || "initial";

  // In cases where a route is still loading and the
  //  user navigates to another route, setActivePage will
  //  still be called when the previous route finishes loading
  //  so we need to check if the URL changed in between
  const locationRef = useRef();
  locationRef.current = location.key;
  const setActivePage = (props) => {
    // location.key is the value expected by the component that invoked setActivePage.
    // locationRef.current is the value of the actual route in the address bar.
    // If these are different, it means that the route changed while the page was still loading.
    if (location.key === locationRef.current) {
      setState(props);
    }
  };

  return (
    <>
      {/*
       * When a new route is matched, instead of rendering the page component
       *  we will render a PageLoader, this component will be in charge of
       *    1. Fetch the page component if lazy loading is configured (optional)
       *    2. Fetch the page component initial properties (optional)
       * Once everything is ready, the page component will be rendered using the transition group below
       */}
      <Switch location={location}>
        {routes.map((route, idx) => (
          <Route
            exact
            key={route.id || idx}
            path={route.path}
            render={(routeProps) => (
              <PageLoader
                route={route}
                routeProps={routeProps}
                setActivePage={setActivePage}
                onError={onError}
                onLoading={onLoading}
                fetchOptions={route.fetchOptions}
              />
            )}
          />
        ))}
      </Switch>
      {/*
       * Once the component is fully loaded we change the state of
       *  AnimationApp component and display the new page using a CSS transition.
       *  The transition group will also take care of removing the previous page component.
       */}
      <TransitionGroup>
        {/*
         * CSSTransition element has to be a direct descendant of TransitionGroup
         *  Otherwise the exit animations won't work
         */}
        {Component && (
          <CSSTransition key={key} {...animation}>
            <Component {...props} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
};

AnimationApp.propTypes = {
  routes: PropTypes.array.isRequired,
  animation: PropTypes.object.isRequired,
  onError: PropTypes.func,
  onLoading: PropTypes.func,
};

/**
 * Component used to prepare the page
 */
const PageLoader = (props) => {
  // Use a ref on a copy of the props (which is frozen) to ensure we run the effect
  //  only once during the life of this component
  const ref = useRef({ ...props });

  useEffect(() => {
    let isMounted = true;
    // Use a variable to abort in case the component unmounts before the data is fetched
    ref.current.isMounted = () => isMounted;
    loadPage(ref.current);
    return () => {
      isMounted = false;
    };
  }, [ref]);

  return null;
};

/**
 * Loads the page component and fetchs any necessary data
 */
async function loadPage({
  route,
  fetchOptions,
  routeProps,
  isMounted,
  setActivePage,
  onLoading = _noop,
  onError = _noop,
}) {
  // Throws an error in case the component was unmounted
  const assertIsMounted = () => {
    if (!isMounted()) {
      throw new Error("COMPONENT_UNMOUNTED");
    }
  };

  // invoke the onLoading callback
  onLoading(true);

  try {
    let initialProps = {};
    const pageProps = { ...routeProps, links: route.links };
    const component = await resolveComponent(route, fetchOptions);
    assertIsMounted();

    if (_isFunction(component.getInitialProps)) {
      initialProps = await component.getInitialProps(pageProps);
      assertIsMounted();
    }

    setActivePage({
      Component: React.memo(component),
      props: { ...pageProps, ...initialProps },
    });
  } catch (error) {
    if (isMounted()) {
      loadPageError(error, onError, routeProps);
    }
  } finally {
    if (isMounted()) {
      onLoading(false);
    }
  }
}

/**
 * Choose an error handling strategy
 * @param object error The thrown error
 * @param function onError Error callback
 * @param object routeProps
 */
function loadPageError(error, onError, routeProps) {
  if (_isFunction(error.handle)) {
    // If the thrown exception has its own error handler
    error.handle(routeProps);
  } else if (_isFunction(onError)) {
    // Call the default error handler
    onError({ ...routeProps, error });
  } else {
    throw error;
  }
}

/**
 *
 * @param object route
 * @param object fetchOptions
 */
async function resolveComponent(route, fetchOptions) {
  if (!route.importComponent && !route.component) {
    throw new Error(
      "A route must include a component or importComponent method"
    );
  }

  // By default asume the component is statically loaded
  let component = route.component;

  // Check if the component should be Lazy loaded
  if (_isFunction(route.importComponent)) {
    const module = await tryAtMost(route.importComponent, fetchOptions);
    component = module.default;
  }

  return component;
}
