import React from "react";
import { LinkButton } from "components/LinkButton";
import { TextBlock } from "components/TextBlock";
import { CodeExample } from "components/CodeExample";

export const AbortNavigationReference = ({ linkTo }) => (
  <>
    <h3 className="text-lg text-blue-700 my-3">Cancel navigation.</h3>
    <TextBlock>
      You can cancel the ongoing navigation from{" "}
      <strong>getInitialProps</strong> by throwing an object with a{" "}
      <strong>handle</strong> method, inside this method you can then navigate
      to any other route using the <strong>history</strong> object.
    </TextBlock>

    <CodeExample title="Example">
      {`
/* Custom error object */
function InitializeError(handle) {
  this.message = "Initialization error";
  this.handle = handle;
}

export function MyPage() {
  return null;
}

MyPage.getInitialProps = async function getInitialProps() {
  // Go back to the previous page instead of loading the current route
  throw new InitializeError(({ history }) => history.goBack());
};
`}
    </CodeExample>

    <div className="text-center">
      <LinkButton to={linkTo}>Click here to start the demo</LinkButton>
    </div>
  </>
);
