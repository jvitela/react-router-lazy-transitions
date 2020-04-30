import React from "react";
import { Page } from "components/Page";
import { PageTitle } from "components/PageTitle";
import { Intro } from "./Intro";
import { RoutesConfiguration } from "./RoutesConfiguration";
import { AppRouterReference } from "./AppRouterReference";
import { PageComponentsReference } from "./PageComponentsReference";
import { DataFetchingReference } from "./DataFetchingReference";
import { NoneFoundReference } from "./NoneFoundReference";
import { RetryOnFailureReference } from "./RetryOnFailureReference";
import { AbortNavigationReference } from "./AbortNavigationReference";
import { ErrorPageReference } from "./ErrorPageReference";
import logo from "./logo.svg";

export function HomePage({ history, links }) {
  return (
    <Page>
      <div className="flex justify-center">
        <img src={logo} className="app-logo" alt="logo" />
      </div>

      <PageTitle>React advanced navigation</PageTitle>

      <Intro />

      <RoutesConfiguration />

      <AppRouterReference
        linkTo={links.basicRouting}
        onNavigateClick={() => history.push(links.basicRouting)}
      />

      <PageComponentsReference />

      <DataFetchingReference linkTo={links.dataFetching} />

      <NoneFoundReference linkTo={links.noneFound} />

      <AbortNavigationReference linkTo={links.cancelNavigation} />

      <ErrorPageReference linkTo={links.errorThrowingPage} />

      <RetryOnFailureReference linkTo={links.retryOnFailure} />

      {/*
        - Fatal Error Page
        - Scroll preserve ? 
      */}
    </Page>
  );
}
