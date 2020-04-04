import React from "react";
import { Button } from "components/Button";
import { LinkButton } from "components/LinkButton";
import { ExternalLink } from "components/ExternalLink";
import { TextBlock } from "components/TextBlock";

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
            <td className="border px-4 py-2 text-gray-800">errorPage</td>
            <td className="border px-4 py-2 text-blue-500">React component</td>
            <td className="border px-4 py-2">
              A component to display in case of an error occurs when loading a
              page.
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-800">loader</td>
            <td className="border px-4 py-2 text-blue-500">
              React component (optional)
            </td>
            <td className="border px-4 py-2">
              A component to display as loading indicator whenever a new route
              is being loaded.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
