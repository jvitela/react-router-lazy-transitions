import React from "react";
import { sleep } from "Utils";
import { TOASTS } from "config";
import { addNotice } from "components/Notifications";

export function AbortPage() {
  console.log("AbortPage");
  return (
    <div>
      <h4>AbortPage page</h4>
      <p>This page will never render</p>
    </div>
  );
}

AbortPage.getInitialProps = async function getInitialProps({ history }) {
  await sleep(1000);
  addNotice(TOASTS, "Failed to fetch data", 3000);
  history.goBack();
  throw new Error("Failed");
};
