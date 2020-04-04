import React from "react";
import { LinkButton } from "components/LinkButton";
import { TextBlock } from "components/TextBlock";
import { CodeExample } from "components/CodeExample";

export const NoneFoundReference = ({ linkTo }) => (
  <>
    <h3 className="text-lg text-blue-700 my-3">
      Handling unresolved routes (None Found){" "}
    </h3>
    <TextBlock>
      In the routes configuration you can add set up a page that will be
      displayed in case none of the defined routes matches the requested url.
      You can do this by omitting the <strong>path</strong> property in the
      configuration.
    </TextBlock>

    <CodeExample title="Configuration example">
      {`
const routes = [
  {
    // other routes...
  },
  ...
  {
    component: My404Page,
    links: {
      home: "/"
    }
  }
];
      `}
    </CodeExample>

    <div className="text-center">
      <LinkButton to={linkTo}>Navigate to an undefined path</LinkButton>
    </div>
  </>
);
