import React from "react";
import { sleep } from "Utils";
import { TOASTS } from "config";
import { addNotice } from "components/Notifications";

export function AbortPage() {
  return (
    <div>
      <h4>AbortPage page</h4>
      <p>This page will never render</p>
    </div>
  );
}

AbortPage.getInitialProps = async function getInitialProps() {
  await sleep(1000);
  addNotice(TOASTS, "Failed to fetch data", 2000);
  throw new InitializeError(({ history }) => history.goBack());
};

function InitializeError(handle) {
  this.message = "Initialization error";
  this.handle = handle;
}
