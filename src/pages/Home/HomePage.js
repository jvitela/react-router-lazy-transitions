import React, { Component } from "react";
import { Page } from "components/Page";
import { PageTitle } from "components/PageTitle";
import { Button } from "components/Button";
import { LinkButton } from "components/LinkButton";
import { ExternalLink } from "components/ExternalLink";
import { TextBlock } from "components/TextBlock";
import logo from "./logo.svg";

export function HomePage({ history, links }) {
  return (
    <Page className="md:flex">
      <div className="flex md:flex-shrink-0">
        <img src={logo} className="app-logo flex-1 h-32 w-32" alt="logo" />
      </div>
      <div>
        <PageTitle>Home</PageTitle>
        <TextBlock>
          This is a demo of React-Router v5 with enhanced page transitions and
          code splitting.
        </TextBlock>
        <TextBlock>
          Every route is statically configured inside{" "}
          <strong>/src/routes.js</strong>
          <br />
          Pages are (optional) asynchronously fetched from the server.
          <br />
          Each page can implement a <code>static async</code> method{" "}
          <strong>getInitialProps</strong> that will be resolved before the page
          enters.
          <br />
          Animation transitions between the routes is done with{" "}
          <code>CSSTransition</code>.<br />
          <ExternalLink to="https://tailwindcss.com/">
            Tailwind CSS
          </ExternalLink>{" "}
          is used for the styles.
        </TextBlock>
        <TextBlock>
          You can configure links to other pages in the configuration. These
          links will be injected to the page component as a <code>links</code>{" "}
          property. The page will also receive a <code>history</code> property
          in order to make imperative navigations.
        </TextBlock>

        <h3 className="text-blue-600 my-2">Simple navigations.</h3>

        <TextBlock>
          Navigate to next page using a link:{" "}
          <LinkButton to={links.next}>Link to another page</LinkButton>
        </TextBlock>

        <TextBlock>
          Navigate to next page imperatively:{" "}
          <Button onClick={() => history.push(links.next)}>
            Click to go to another page
          </Button>
        </TextBlock>
      </div>
    </Page>
  );
}
