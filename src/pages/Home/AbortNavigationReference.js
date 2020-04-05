import React from "react";
import { LinkButton } from "components/LinkButton";
import { TextBlock } from "components/TextBlock";
import { CodeExample } from "components/CodeExample";

export const AbortNavigationReference = ({ linkTo }) => (
  <>
    <h3 className="text-lg text-blue-700 my-3">
      Aborting navigation on loading
    </h3>
    <TextBlock>
      You can redirect from the loading route in{" "}
      <strong>getInitialProps</strong>. If you want to prevent the route from
      displaying, throw an exception
    </TextBlock>

    <CodeExample title="Class components">
      {`
export function MyPage() {
  return <div> contents... </div>
  );
}

MyPage.getInitialProps = async function getInitialProps({ history }) {
  try {
    const data = await someApi.fetchData();
    return { data };
  
  } catch(error) {
    history.goBack();
    throw error;
  }
};
`}
    </CodeExample>

    <div className="text-center">
      <LinkButton to={linkTo}>Click here to start the demo</LinkButton>
    </div>
  </>
);
