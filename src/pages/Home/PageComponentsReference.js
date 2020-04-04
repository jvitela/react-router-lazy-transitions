import React from "react";
import { ExternalLink } from "components/ExternalLink";
import { TextBlock } from "components/TextBlock";
import { CodeExample } from "components/CodeExample";

export const PageComponentsReference = () => (
  <>
    <h3 className="text-lg text-blue-700 my-3">Page components</h3>
    <TextBlock>
      Components used to display the contents of a route will be rendered with{" "}
      <ExternalLink to="https://reacttraining.com/react-router/web/api/Route/route-props">
        route-props
      </ExternalLink>
      .<br />
      See the documentation of React Router Web for details.
      <br />
      Additionally, the component will receive the <strong>links</strong>{" "}
      property defined in the route configuration.
    </TextBlock>
    <CodeExample>
      {`
const MyPage = ({ match, location, history, links }) => {
  return <p>Page contents</p>;
}`}
    </CodeExample>
  </>
);
