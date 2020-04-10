import React from "react";
import { Button } from "components/Button";
import { LinkButton } from "components/LinkButton";
import { ExternalLink } from "components/ExternalLink";
import { TextBlock } from "components/TextBlock";
import { CodeExample } from "components/CodeExample";

export const AppRouterReference = ({ linkTo, onNavigateClick }) => (
  <>
    <h3 className="text-lg text-blue-700 my-3">AppRouter</h3>
    <div className="max-w-full overflow-x-scroll">
      <table className="table-auto text-sm text-gray-600 mb-2">
        <thead className="text-blue-700">
          <tr>
            <th className="px-4 py-2">Property</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-gray-800">basename</td>
            <td className="border px-4 py-2 text-blue-500">string</td>
            <td className="border px-4 py-2">
              The base URL for all locations. If your app is served from a
              sub-directory on your server, you’ll want to set this to the
              sub-directory. A properly formatted basename should have a leading
              slash, but no trailing slash.
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2 text-gray-800">animation</td>
            <td className="border px-4 py-2 text-blue-500">object</td>
            <td className="border px-4 py-2">
              Properties to be forwarded to{" "}
              <ExternalLink to="https://reactcommunity.org/react-transition-group/css-transition">
                CSSTransition
              </ExternalLink>{" "}
              component.
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-800">routes</td>
            <td className="border px-4 py-2 text-blue-500">array</td>
            <td className="border px-4 py-2">
              An array of objects containing the route configuration for each
              page.
              <br />
              See <strong>/src/routes.js</strong> for available options.
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2 text-gray-800">onError</td>
            <td className="border px-4 py-2 text-blue-500">function</td>
            <td className="border px-4 py-2">
              Callback in case an error is thrown at{" "}
              <strong>getInitialProps</strong>.
              <br />
              The function will be called with{" "}
              <ExternalLink to="https://reacttraining.com/react-router/web/api/Route/route-props">
                route-props
              </ExternalLink>{" "}
              and the error object thrown.
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-800">onLoading</td>
            <td className="border px-4 py-2 text-blue-500">function</td>
            <td className="border px-4 py-2">
              A callback invoked when a page transition starts and when it ends.
              <br />
              It receives a boolean parameter indicating if there is an ongoing
              transition.
              <br />
              You can use this function to display a loading indicator.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <CodeExample title="Example">
      {`
const MyApp = () => {
  const [isLoading, setLoading] = useState(false);
  return (
    <>
      <AppRouter
        basename="/my-app"
        routes={routes}
        animation={{
          timeout={200} 
          classNames="my-page"
        }}
        onError={props => props.history.replace("/error", props.error)}
        onLoading={setLoading}
      />
      {isLoading && <LoadingIndicator />}
    </>
  );
};
      `}
    </CodeExample>
    <h4 className="text-blue-600 my-2">Example: Basic Routing.</h4>
    <TextBlock>
      Navigate to next page using a link or programatically. In this example the
      page is being lazy loaded from the server before the animation starts.
    </TextBlock>
    <div className="grid grid-rows-1 grid-flow-col gap-8 px-8">
      <LinkButton to={linkTo}>Navigate with Link</LinkButton>
      <Button onClick={onNavigateClick}>Navigate on click</Button>
    </div>
  </>
);
