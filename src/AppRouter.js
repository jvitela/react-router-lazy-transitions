import React, { useState, useEffect } from 'react'
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
export const AppRouter = props => {
    // console.log('AppRouter::render');
    return (
        <Router basename="/react-router-lazy-transitions">
            <AnimationApp {...props} />
        </Router>
    );
}

const AnimationApp = ({ routes, timeout }) => {
    const location = useLocation();
    const [activePage, setActivePage] = useState(null);

    const onReady = async function (route, routeProps) { 
        if (!activePage || activePage.route !== route) {
            const { Component, initialProps } = await getComponent(route);
            setActivePage({ Component, initialProps, route, routeProps });
        }
    };

    const key = (activePage && activePage.routeProps.location.key) || 'initial'
    // console.log('AnimationApp::render');
    return (
        <React.Fragment>
            {/*(!activePage || activePage.routeProps.location.key !== location.key) &&
                <div>Loading...</div>
            */}
            <Switch location={location}>
                {routes.map(route =>
                    <Route
                        exact
                        key={route.path}
                        path={route.path}
                        render={routeProps => (
                            <PageLoader
                                route={route}
                                routeProps={routeProps}
                                onReady={onReady}
                            />
                        )}
                    />
                )}
            </Switch>
            <TransitionGroup className="transition-group">
                {/*
                 * CSSTransition element has to be a direct descendant of TransitionGroup
                 *  Otherwise the exit animations won't work
                 */}
                {activePage &&
                    <CSSTransition
                        key={key}
                        classNames="container--fade"
                        timeout={timeout}
                        // onEnter={() => console.log('onEnter', key)}
                        // onEntering={() => console.log('onEntering', key)}
                        // onEntered={() => console.log('onEntered', key)}
                        // onExit={() => console.log('onExit', key)}
                        // onExiting={() => console.log('onExiting', key)}
                        // onExited={() => console.log('onExited', key)}
                    >
                        <activePage.Component
                            {...activePage.routeProps}
                            {...activePage.initialProps}
                            links={activePage.route.links}
                        />
                    </CSSTransition>
                }
            </TransitionGroup>
        </React.Fragment>
    );
};

const PageLoader = ({ route, routeProps, onReady }) => {
    useEffect(() => {
        onReady(route, routeProps);
    }, [route, routeProps, onReady])

    // console.log('PageLoader::render');
    return null;
}


// const delay = time => (new Promise(resolve => setTimeout(resolve, time)));

async function getComponent(route) {
    // console.log('getComponent ', route.path);

    if (!route.importComponent && !route.component) {
        throw new Error('A route must include a component or importComponent method');
    }

    let Component, initialProps;

    if (typeof route.importComponent === 'function') {
        // await delay(500);
        const module = await route.importComponent();
        Component = module.default;

    } else {
        Component = route.component
    }

    if (typeof Component.getInitialProps === 'function') {
        // await delay(500);
        initialProps = await Component.getInitialProps();
    }

    Component = React.memo(Component);
    return { Component, initialProps };
}
