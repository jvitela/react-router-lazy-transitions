import React from "react";
import { ExternalLink } from "components/ExternalLink";
import { TextBlock } from "components/TextBlock";

export const Intro = () => (
  <>
    <TextBlock element="div">
      This is a demo implementing{" "}
      <ExternalLink to="https://reacttraining.com/react-router/web/guides/quick-start">
        React-Router v5
      </ExternalLink>{" "}
      with some extra cool features:
      <ul className="list-decimal pl-12 my-4">
        <li>An intuitive page-based routing configuration</li>
        <li>Animated transitions</li>
        <li>Scroll restoration</li>
        <li>Fetching data before navigation</li>
        <li>Code splitting for faster page loads</li>
        <li>Retry fetch upon failure</li>
      </ul>
    </TextBlock>
    <TextBlock>
      Animation transitions between the pages is done with{" "}
      <ExternalLink to="https://reactcommunity.org/react-transition-group/css-transition">
        CSSTransition
      </ExternalLink>
      .<br /> Styling and animations are implemented with{" "}
      <ExternalLink to="https://tailwindcss.com/">Tailwind CSS</ExternalLink>.
    </TextBlock>

    <h2 className="text-lg text-blue-700 my-3">Scroll Restoration</h2>
    <TextBlock>
      The animated transition between the pages breaks the browser's
      out-of-the-box{" "}
      <ExternalLink to="https://reacttraining.com/react-router/web/guides/scroll-restoration">
        scroll restoration
      </ExternalLink>
      .
      <br />
      The <strong>Page</strong> component used in this demo includes custom
      logic to persist and restore the scroll position.
    </TextBlock>
  </>
);
