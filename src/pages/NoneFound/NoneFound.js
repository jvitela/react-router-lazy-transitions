import React from "react";
import { Page } from "components/Page";
import { Button } from "components/Button";
import { Alert } from "components/Alert";

export function NoneFound({ history }) {
  return (
    <Page>
      <Alert kind="error">
        <p className="font-bold">None Found</p>
        <p className="mb-2">The page you requested does not exists</p>
      </Alert>
      <div className="mt-2">
        <Button onClick={() => history.goBack()}>Back</Button>
      </div>
    </Page>
  );
}
