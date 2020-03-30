import React, { Component } from "react";
import { Page } from "components/Page";
import { Button } from "components/Button";
import { LinkButton } from "components/LinkButton";
import { ExternalLink } from "components/ExternalLink";
import logo from "./logo.svg";

export class HomePage extends Component {
  onNavigate() {
    this.props.history.push(this.props.links.next);
  }

  render() {
    console.log("Home::render"); //, this.props);
    return (
      <Page className="flex">
        <div className="flex-shrink-0">
          <img src={logo} className="app-logo h-32 w-32" alt="logo" />
        </div>
        <div>
          <h4 className="text-xl text-gray-900 leading-tight">Home</h4>
          <p className="text-base text-gray-600 leading-normal mb-2">
            This is a demo of React-Router v5 with enhanced page transitions and
            code splitting.
            <br />
            Every route is statically configured inside{" "}
            <strong>/src/routes.js</strong>
            <br />
            Pages are (optional) asynchronously fetched from the server.
            <br />
            Each page can implement a <code>static async</code> method{" "}
            <strong>getInitialProps</strong> that will be resolved before the
            page enters.
            <br />
            Animation transitions between the routes is done with{" "}
            <code>CSSTransition</code>.<br />
            <ExternalLink to="https://tailwindcss.com/">
              Tailwind CSS
            </ExternalLink>{" "}
            is used for the styles.
          </p>
          <p className="text-base text-gray-600 leading-normal mb-2">
            You can configure links to other pages in the configuration. These
            links will be injected to the page component as a <code>links</code>{" "}
            property. The page will also receive a <code>history</code> property
            in order to make imperative navigations.
          </p>
          <p className="text-base text-gray-600 leading-normal mb-2">
            <LinkButton to={this.props.links.next}>
              Navigate to next page using a link
            </LinkButton>
          </p>
          <p className="text-base text-gray-600 leading-normal mb-2">
            <Button onClick={this.onNavigate.bind(this)}>
              Navigate to next page imperatively
            </Button>
          </p>
        </div>
      </Page>
    );
  }
}
