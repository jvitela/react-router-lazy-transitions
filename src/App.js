import React, { Suspense, lazy, useReducer, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import getRoutes from 'routes'
import {
    getInitialState,
    reducer,
    locationChanged,
    pageEnter,
    pageExited,
    pageEntered,
} from 'lib/Utils'

const AppRouter = () => (
  <Router basename="/react-router-lazy-transitions">
        <Route
            render={props => (
                <TransitionRouter {...props} routes={getRoutes()} />
            )}
        />
  </Router>
);

const TransitionRouter = ({ location, routes }) => {
    const [state, dispatch] = useReducer(reducer, getInitialState());

    useEffect(() => {
        dispatch(locationChanged(location));
    }, [location]);

    const { toRender, toFetchData } = groupEntities(state);
    return (
        <React.Fragment>
            {// Routes that need to fetch data
            toFetchData.map(({ entity, key }) => 
                <RouterLocation
                    key={key}
                    routes={routes}
                    location={entity.location}
                    initialProps={null}
                    onPageReady={iniProps => dispatch(pageEnter(key, iniProps))}
                />
            )}
            <TransitionGroup className="transition-group">
                {// Routes that are displayed
                toRender.map(({ entity, key }) => 
                    <CSSTransition
                        key={key}
                        timeout={300}
                        classNames="container--fade"
                        onExited={() => dispatch(pageExited(key))}
                        onEntered={() => dispatch(pageEntered(key))}
                    >
                        <RouterLocation
                            routes={routes}
                            location={entity.location}
                            initialProps={entity.initialProps}
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </React.Fragment>
    );
};


function groupEntities(state) {
    const toRender = [];
    const toFetchData = [];
    state.result.forEach(key => {
        const entity = state.entities[key];
        if (entity.initialProps === null) {
            // render a router that will output 
            //   a PageLoader wrapper while the initialData is being fetched            
            toFetchData.push({ entity, key });

        } else if (!entity.isExiting) {
            // Only render the CSSTransition if the initialProps are set
            //  And is not already exiting
            toRender.push({ entity, key });
        }
    });
    return { toRender, toFetchData };
}

/** 
 * Renders the given location
 */
class RouterLocation extends React.Component {
    // Prevent rendering when the Router 
    //  is moved from a Fragment to a Transition
    shouldComponentUpdate(nextProps) {
        return (this.props.initialProps !== nextProps.initialProps);
    }

    render() {
        const { routes, location, initialProps, onPageReady } = this.props;
        return (
            <div className="container">
            <Switch location={location}>
                {routes.map(route => {
                    const Component = getComponent(route);
                    return (
                        <Route
                            exact
                            key={route.path}
                            path={route.path}
                            component={props => (
                                <Component
                                    {...props}
                                    path={route.path}
                                    initialProps={initialProps}
                                    onPageReady={onPageReady}
                                />
                            )}
                        />
                    );
                })}
            </Switch>
            </div>
        );
    }
}

/**
 * Return either a React.lazy or a HOC for initialProps
* @param {object} route The route info
*/
const getComponent = (route) => {
    if (route.importComponent) {
        return getLazyComponent(route);
    }

    if (route.component) {
        return withPageLifeCycle(route.component, route);
    }

    throw new Error('A route must include a component or importComponent method');
};


/**
 * A HOC that returns a Lazy component
 * 
 * @param {object} route The route info
 */
const getLazyComponent = (route) => {
    const LazyPage = lazy(async () => {
        const module = await route.importComponent();
        // Return the module wrapped in a HOC
        return {
            ...module,
            default: withPageLifeCycle(module.default, route)
        };
    });

    return props => (
        <Suspense fallback={null}>
            <LazyPage {...props} />
        </Suspense>
    );
}

const withPageLifeCycle = (Page, route) => {

    class PageLoader extends React.Component {
        // Load async dependencies for the page
        //  Only once after the component mounts
        componentDidMount() {
            this.fetchInitialProps().then(this.props.onPageReady);
        }

        async fetchInitialProps() {
            if (typeof Page.getInitialProps === 'function') {
                const iniProps = await Page.getInitialProps(this.props);
                return iniProps;
            }
            // return undefined or empty object
        }

        render() {
            // Don't render anything yet
            return null;
        }
    }

    const PageRenderer = ({ initialProps, onPageReady, ...pageProps }) => (
        <Page {...initialProps} {...pageProps} links={route.links} />
    );

    const Component = props => (
        props.initialProps === null
            ? <PageLoader {...props} />
            : <PageRenderer {...props} />
    );

    return Component;
}

export default AppRouter;
