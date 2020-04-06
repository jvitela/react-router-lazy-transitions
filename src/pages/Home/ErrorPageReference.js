import React from "react";
import { LinkButton } from "components/LinkButton";
import { TextBlock } from "components/TextBlock";
import { CodeExample } from "components/CodeExample";

export const ErrorPageReference = ({ linkTo }) => (
  <>
    <h3 className="text-lg text-blue-700 my-3">Handle errors.</h3>
    <TextBlock>Handle errors.</TextBlock>

    <CodeExample title="Example">
      {`
/* example */
`}
    </CodeExample>

    <div className="text-center">
      <LinkButton to={linkTo}>Click here to start the demo</LinkButton>
    </div>
  </>
);
