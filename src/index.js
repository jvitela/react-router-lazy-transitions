import React from "react";
import ReactDOM from "react-dom";
import "./styles/bundle.css";

import { AppRouter } from "./AppRouter";
import getRoutes from "./routes";
import * as serviceWorker from "./serviceWorker";
import { ErrorPage } from "pages/Error/ErrorPage";
import { Loader } from "components/Loader";
import { NotificationsList } from "components/Notifications";
import { TOASTS, PAGE_FADE_ANIMATION } from "config";

ReactDOM.render(
  <React.Fragment>
    <AppRouter
      basename="/react-router-lazy-transitions"
      animation={PAGE_FADE_ANIMATION}
      routes={getRoutes()}
      errorPage={ErrorPage}
      loader={Loader}
    />
    <NotificationsList channel={TOASTS} />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
