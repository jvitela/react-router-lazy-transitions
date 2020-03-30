import React from "react";
import { Page } from "components/Page";
import { LinkButton } from "components/LinkButton";
import { ErrorAlert } from "components/ErrorAlert";

export function NoneFound({ links }) {
  return (
    <Page>
      <ErrorAlert>
        <p className="font-bold">None Found</p>
        <p className="mb-2">The page you requested does not exists</p>
      </ErrorAlert>
      <LinkButton to={links.home}>Home</LinkButton>
    </Page>
  );
}
