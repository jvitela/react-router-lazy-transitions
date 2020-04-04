import React from "react";
import { Page } from "components/Page";
import { PageTitle } from "components/PageTitle";
import { Intro } from "./Intro";
import { AppRouterReference } from "./AppRouterReference";
import { PageComponentsReference } from "./PageComponentsReference";
import { DataFetchingReference } from "./DataFetchingReference";
import { NoneFoundReference } from "./NoneFoundReference";
import { RetryOnFailureReference } from "./RetryOnFailureReference";
import logo from "./logo.svg";

export function HomePage({ history, links }) {
  return (
    <Page>
      <div className="flex">
        <img src={logo} className="app-logo flex-1 h-32 w-32" alt="logo" />
      </div>

      <PageTitle>Home</PageTitle>

      <Intro />

      <AppRouterReference
        linkTo={links.basicRouting}
        onNavigateClick={() => history.push(links.basicRouting)}
      />

      <PageComponentsReference />

      <DataFetchingReference linkTo={links.dataFetching} />

      <NoneFoundReference linkTo={links.noneFound} />

      <RetryOnFailureReference linkTo={links.retryOnFailure} />

      {/*
        - Abort Fetch
        - Fatal Error Page
        - Scroll preserve ? 
      */}
    </Page>
  );
}
