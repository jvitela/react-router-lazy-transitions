import React from 'react';
import ReactDOM from 'react-dom';
import './styles/bundle.css';

import { AppRouter } from './AppRouter';
import getRoutes from './routes'
import * as serviceWorker from './serviceWorker';
import { ErrorPage } from 'pages/Error/ErrorPage';
import { Loader } from 'components/Loader';

ReactDOM.render(
    <AppRouter 
        animationTimeout={500} 
        routes={getRoutes()} 
        errorPage={ErrorPage}
        loader={Loader} 
    />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
