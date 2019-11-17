import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppRouter } from './AppRouter';
import getRoutes from './routes'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppRouter routes={getRoutes()} timeout={300} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
