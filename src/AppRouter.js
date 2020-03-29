import { tryAtMost } from 'Utils'
import React, { useState, useEffect, useCallback, useRef } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useLocation
} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

/**
 * Main router component
 */
export const AppRouter = ({ basename, ...props }) => {
    // console.log('AppRouter::render');
    return (
        <Router basename={basename}>
            <AnimationApp {...props} />
        </Router>
    );
}

const AnimationApp = ({ routes, animationTimeout, errorPage, loader }) => {
    const location = useLocation();
    const [activePage, setState] = useState({});
    const { Component, props } = activePage;
    const key = (props && props.location.key) || 'initial'

    // In cases where a route is still loading and the
    //  user navigates to another route, setActivePage will
    //  still be called when the previous route finishes loading
    //  so we need to check if the URL changed in between
    const locationRef = useRef();
    locationRef.current = location.key;
    const setActivePage = props => {
        // location.key is the value expected by the component that invoked setActivePage.
        // locationRef.current is the value of the actual route in the address bar. 
        // If these are different, it means that the route changed while the page was still loading.
        if (location.key === locationRef.current) {
            setState(props);
        }
    };

    return (
        <React.Fragment>
            {/*
              * When a new route is matched, instead of directly rendering a page
              *  we first fetch the component (if needed) and then
              *  fetch its initial properties (if needed)
              */}
            <Switch location={location}>
                {routes.map(route =>
                    <Route
                        exact
                        key={route.id || route.path}
                        path={route.path}
                        render={routeProps => (
                            <PageLoader
                                route={route}
                                routeProps={routeProps}
                                setActivePage={setActivePage}
                                errorPage={errorPage}
                                element={loader}
                                fetchOptions={route.fetchOptions}
                            />
                        )}
                    />
                )}
            </Switch>
            {/*
              * Once the component is fully loaded we change the state of
              *  AnimationApp component and display the new page using a CSS transition.
              */}
            <TransitionGroup className="flex">
                {/*
                  * CSSTransition element has to be a direct descendant of TransitionGroup
                  *  Otherwise the exit animations won't work
                  */}
                {Component &&
                    <CSSTransition
                        key={key}
                        classNames="container--fade"
                        timeout={animationTimeout}
                    >
                        <Component {...props}/>
                    </CSSTransition>
                }
            </TransitionGroup>
        </React.Fragment>
    );
};

const PageLoader = ({ element, ...props }) => {
    const [isReady, setReady] = useState(false);

    // Use a ref on the props to ensure we run the effect
    //  only once during the life of this component
    const ref = useRef(props);

    const onError = useCallback(error => {
        const { setActivePage, errorPage, routeProps, route } = ref.current;
        setActivePage({
            Component: errorPage,
            props: { ...routeProps, error, links: route.links }
        });
        setReady(true);
    }, [ref]);

    useEffect(() => {
        let isMounted = ref.current.isMounted = true;
        initializePage(ref.current)
            .then(() => isMounted && setReady(true))
            .catch(err => isMounted && onError(err));
        
        return () => { isMounted = false; }
    }, [ref, onError]);

    return isReady ? null : element ? React.createElement(element) : null;
}

async function initializePage({ route, routeProps, setActivePage, fetchOptions }) {
    if (!route.importComponent && !route.component) {
        throw new Error('A route must include a component or importComponent method');
    }

    let Component, initialProps;

    if (typeof route.importComponent === 'function') {
        const module = await tryAtMost(route.importComponent, fetchOptions);
        Component = module.default;

    } else {
        Component = route.component
    }

    if (typeof Component.getInitialProps === 'function') {
        initialProps = await Component.getInitialProps({ 
            ...routeProps, 
            links: route.links 
        });
    }

    setActivePage({
        Component: React.memo(Component),
        props: {
            ...routeProps,
            ...initialProps,
            links: route.links
        }
    });
}
