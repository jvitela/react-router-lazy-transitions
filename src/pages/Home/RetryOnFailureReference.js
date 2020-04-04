import React from "react";
import { LinkButton } from "components/LinkButton";
import { TextBlock } from "components/TextBlock";

export const RetryOnFailureReference = ({ linkTo }) => (
  <>
    <h3 className="text-lg text-blue-700 my-3">Retry on network failure.</h3>
    <TextBlock>
      When using code splitting to lazy load the pages, there is a possibility
      that the page won't load if the network connection is unreliable. In these
      cases, the app router will automatically wait and retry to fetch the page
      again.
    </TextBlock>

    <div className="max-w-full overflow-x-scroll">
      <table className="table-auto text-sm text-gray-600 mb-2">
        <thead className="text-blue-700">
          <tr>
            <th className="px-4 py-2">Retry</th>
            <th className="px-4 py-2">Waiting time in milliseconds</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-gray-800">1</td>
            <td className="border px-4 py-2 text-blue-500">
              250 <small>(1&times;250) </small>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2 text-gray-800">2</td>
            <td className="border px-4 py-2 text-blue-500">
              500 <small>(2&times;250) </small>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-800">3</td>
            <td className="border px-4 py-2 text-blue-500">
              750 <small>(3&times;250) </small>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2 text-gray-800">4</td>
            <td className="border px-4 py-2 text-blue-500">
              1000 <small>(4&times;250) </small>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-800">5</td>
            <td className="border px-4 py-2 text-blue-500">
              1000 <small>(max retry interval) </small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <TextBlock>
      The following live example uses a wrapper around the{" "}
      <strong>import</strong> statement to force the page to fail the first{" "}
      <strong>two</strong> times. A notification is displayed after each
      attempt.
    </TextBlock>
    <div className="text-center">
      <LinkButton to={linkTo}>Click here to start the demo</LinkButton>
    </div>
  </>
);
