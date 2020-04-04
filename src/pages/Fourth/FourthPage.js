import React from "react";
import { Page } from "components/Page";
import { PageTitle } from "components/PageTitle";
import { TextBlock } from "components/TextBlock";
import { Button } from "components/Button";
import { CodeExample } from "components/CodeExample";

export const FourthPage = ({ history }) => (
  <Page>
    <PageTitle>Fetch Retry Example</PageTitle>

    <TextBlock>
      You can configure a custom retry behaviour by passing a{" "}
      <strong>fetchOptions</strong> attribute to the routes configuration.
    </TextBlock>

    <div className="max-w-full overflow-x-scroll">
      <table className="table-auto text-sm text-gray-600 mb-2">
        <thead className="text-blue-700">
          <tr>
            <th className="px-4 py-2">Attribute</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-gray-800">maxRetries</td>
            <td className="border px-4 py-2 text-blue-500">integer</td>
            <td className="border px-4 py-2 text-blue-800">
              The maximum number of retries
            </td>
            <td className="border px-4 py-2 text-blue-800">5</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2 text-gray-800">retryInterval</td>
            <td className="border px-4 py-2 text-blue-500">integer</td>
            <td className="border px-4 py-2 text-blue-800">
              The base waiting time in milliseconds
            </td>
            <td className="border px-4 py-2 text-blue-800">250</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-800">maxRetryInterval</td>
            <td className="border px-4 py-2 text-blue-500">integer</td>
            <td className="border px-4 py-2 text-blue-800">
              The maximum allowed waiting time in milliseconds
            </td>
            <td className="border px-4 py-2 text-blue-800">1000</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2 text-gray-800">onFail</td>
            <td className="border px-4 py-2 text-blue-500">function</td>
            <td className="border px-4 py-2 text-blue-800">
              A function to be called after a failure
            </td>
            <td className="border px-4 py-2 text-blue-800">{"() => {}"}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-800">onReady</td>
            <td className="border px-4 py-2 text-blue-500">function</td>
            <td className="border px-4 py-2 text-blue-800">
              A function to be called success
            </td>
            <td className="border px-4 py-2 text-blue-800">{"() => {}"}</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2 text-gray-800">canRetry</td>
            <td className="border px-4 py-2 text-blue-500">function</td>
            <td className="border px-4 py-2 text-blue-800">
              A function that given an <strong>error</strong> object returns{" "}
              <strong>true</strong> if the next retry can be attempted.
            </td>
            <td className="border px-4 py-2 text-blue-800">{"() => true"}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <CodeExample title="Custom configuration example">
      {`
const routes = [
  ...
  {
    path: "/my-page",
    importComponent: () => import("pages/MyPage"),
    fetchOptions: {
      maxRetries: 3,
      retryInterval: 2000,
      maxRetryInterval: 4000,
      onFail({ retries, result }) { ... },
      onReady({ retries, maxRetries, error }) { ... },
      canRetry(error) { return true; }
    },
    links: {
      ...
    }
  },
  ...
];
      `}
    </CodeExample>
    <TextBlock>
      In the example above, if there is an error while fetching the related code
      for "/my-page" route, the router will retry up to{" "}
      <strong>maxRetries</strong> times, waiting each time a multiple of{" "}
      <strong>retryInterval</strong> before attempting to fetch the page again,
      but no longer than the specified <strong>maxRetryInterval</strong>.
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
              2000 <small>(1&times;2000) </small>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2 text-gray-800">2</td>
            <td className="border px-4 py-2 text-blue-500">
              4000 <small>(2&times;2000) </small>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-800">3</td>
            <td className="border px-4 py-2 text-blue-500">
              4000 <small>(maxRetryInterval) </small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-2 text-center">
      <Button onClick={() => history.goBack()}>Back</Button>
    </div>
  </Page>
);
