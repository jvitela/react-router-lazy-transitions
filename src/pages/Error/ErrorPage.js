import React from "react";
import { Page } from "components/Page";
import { Button } from "components/Button";
import { Alert } from "components/Alert";

export function ErrorPage({ error, history }) {
  return (
    <Page>
      <Alert kind="error">
        <p className="font-bold">Critical error</p>
        <p className="mb-2">{error.message}</p>
      </Alert>
      <Button onClick={() => history.goBack()}>Back</Button>
    </Page>
  );
}
