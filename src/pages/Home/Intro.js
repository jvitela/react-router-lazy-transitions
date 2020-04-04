import React from "react";
import { ExternalLink } from "components/ExternalLink";
import { TextBlock } from "components/TextBlock";

export const Intro = () => (
  <>
    <TextBlock>
      This is a demo of React-Router v5 with animated page transitions and code
      splitting with hability to retry in case of network failures. All the
      logic is abstracted in a component called <strong>AppRouter</strong>.
    </TextBlock>
    <TextBlock>
      Animation transitions between the pages is done with{" "}
      <ExternalLink to="https://reactcommunity.org/react-transition-group/css-transition">
        CSSTransition
      </ExternalLink>
      .<br /> Styling and animations are implemented with{" "}
      <ExternalLink to="https://tailwindcss.com/">Tailwind CSS</ExternalLink>.
    </TextBlock>
  </>
);
