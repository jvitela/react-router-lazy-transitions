import React from "react";
import { LinkButton } from "components/LinkButton";
import { TextBlock } from "components/TextBlock";
import { CodeExample } from "components/CodeExample";

export const ErrorPageReference = ({ linkTo }) => (
  <>
    <h3 className="text-lg text-blue-700 my-3">Handle errors.</h3>
    <TextBlock>
      You can use the <strong>onError</strong> callback to redirect to another
      location in case a route failed to load.
    </TextBlock>

    <CodeExample title="AppRouter setup">
      {`
<AppRouter
  ...
  onError={
    ({ history, error }) => {
      // Redirect to the error page when a route fails to load
      //  send the error object to the page as part of location.state
      history.replace("/error", { error })
    }
  }
/>
      `}
    </CodeExample>

    <CodeExample title="Page throwing an error">
      {`
export const ErrorThrowingPage = () => (
  <p>This page throws an error when loading</p>
);

ErrorThrowingPage.getInitialProps = () => {
  throw new Error("Something went wrong");
};
      `}
    </CodeExample>

    <CodeExample title="Error page">
      {`
const ErrorPage = ({ location, history }) => {
  const { error } = location.state;
  return (
    <>
      <h1>Error</h1>
      <p>
        {error.message /* Something went wrong */}
      </p>
    </>
  );
};
      `}
    </CodeExample>

    <div className="text-center">
      <LinkButton to={linkTo}>Click here to start the demo</LinkButton>
    </div>
  </>
);
