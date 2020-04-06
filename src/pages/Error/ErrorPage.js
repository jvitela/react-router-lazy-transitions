import React from "react";
import { Page } from "components/Page";
import { PageTitle } from "components/PageTitle";
import { Button } from "components/Button";
import { Alert } from "components/Alert";

export function ErrorPage({ location, history }) {
  const error = location.state;
  return (
    <Page>
      <PageTitle>Error Page</PageTitle>
      <Alert kind="error">
        <p className="font-bold">Critical error</p>
        {error && <p className="mb-2">{error.message}</p>}
      </Alert>
      <div className="mt-2">
        <Button onClick={() => history.goBack()}>Back</Button>
      </div>
    </Page>
  );
}
