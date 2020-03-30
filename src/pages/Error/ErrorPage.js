import React from "react";
import { Page } from "components/Page";
import { Button } from "components/Button";
import { ErrorAlert } from "components/ErrorAlert";

export function ErrorPage({ error, history }) {
  return (
    <Page>
      <ErrorAlert>
        <p className="font-bold">Critical error</p>
        <p className="mb-2">{error.message}</p>
      </ErrorAlert>
      <Button onClick={() => history.goBack()}>Back</Button>
    </Page>
  );
}
