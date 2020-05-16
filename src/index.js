import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles/bundle.css";

import { BrowserRouter as Router } from "react-router-dom";
import { AnimationApp } from "./AppRouter";
import getRoutes from "./routes";
import * as serviceWorker from "./serviceWorker";
// import { ErrorPage } from "pages/Error/ErrorPage";
import { Loader } from "components/Loader";
import { NotificationsList } from "components/Notifications";
import { TOASTS, PAGE_FADE_ANIMATION } from "config";

const MyApp = () => {
  const [isLoading, setLoading] = useState(false);
  return (
    <>
      <Router basename="/react-router-lazy-transitions">
        <AnimationApp
          animation={PAGE_FADE_ANIMATION}
          routes={getRoutes()}
          onError={(props) => props.history.replace("/error", props.error)}
          onLoading={setLoading}
        />
      </Router>
      {isLoading && <Loader />}
      <NotificationsList channel={TOASTS} />
    </>
  );
};

ReactDOM.render(<MyApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
