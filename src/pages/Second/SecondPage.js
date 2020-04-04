import React from "react";
import { Page } from "components/Page";
import { PageTitle } from "components/PageTitle";
import { TextBlock } from "components/TextBlock";
import { ExternalLink } from "components/ExternalLink";
import { CodeExample } from "components/CodeExample";
import { Button } from "components/Button";

export default function SecondPage({ history }) {
  return (
    <Page>
      <PageTitle>Page Navigations</PageTitle>
      <TextBlock>
        Page navigations can be done with{" "}
        <ExternalLink to="https://reacttraining.com/react-router/web/api/Link">
          {"<Link/>"}
        </ExternalLink>{" "}
        component from React Router.
      </TextBlock>

      <CodeExample>
        {`
import React from "react";
import { Link } from "react-router-dom";

export const PageExample = ({ links }) => (
  <p>
    Go to <Link to={links.about}>About</Link> page.
  </p>
);
`}
      </CodeExample>

      <TextBlock>
        It is also posible to navigate programatically using the{" "}
        <strong>history</strong> property injected to the page
      </TextBlock>

      <CodeExample>
        {`
import React from "react";
import { Link } from "react-router-dom";

export const PageExample = ({ links, history }) => (
  <p>
    Click to go to About page:
    <button
      onClick={() => history.push(links.about)}
    >
      Navigate
    </button>
    <button 
      onClick={() => history.goBack()}
    >
      Back
    </button>
  </p>
);
`}
      </CodeExample>
      <Button onClick={() => history.goBack()}>Back</Button>
    </Page>
  );
}
