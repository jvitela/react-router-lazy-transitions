import React from "react";
import { LinkButton } from "components/LinkButton";
import { TextBlock } from "components/TextBlock";
import { CodeExample } from "components/CodeExample";

export const DataFetchingReference = ({ linkTo }) => (
  <>
    <h3 className="text-lg text-blue-700 my-3">Data Fetching</h3>
    <TextBlock>
      Every time you need to get asynchronous data, you can implement a{" "}
      <strong>static async</strong> method <strong>getInitialProps</strong> that
      is called when navigating.
    </TextBlock>

    <CodeExample title="Class components">
      {`
class MyPage {
  static async getInitialProps({ match, location, history, links }) {
    const myData = await myApi.fetchSomeData();
    // return an object with the properties to inject
    return { myData };
  }

  render() {
    return <p>Page contents: {this.props.myData} </p>;
  }
}
`}
    </CodeExample>

    <CodeExample title="Functional components">
      {`
const MyPage = ({ myData }) => (
  <p>Page contents: {myData} </p>
);

MyPage.getInitialProps = async ({ match, location, history, links }) => {
  const myData = await myApi.fetchSomeData();
  // return an object with the properties to inject
  return { myData };
}
`}
    </CodeExample>

    <h4 className="text-blue-600 my-2">Example: Data fetching.</h4>
    <TextBlock>
      Click on the link to navigate to the next page, the page will not be
      displayed until the data is fetched.
      <br />
      Note that while the page loads, a <strong>loading indicator</strong> is
      displayed at the top.
    </TextBlock>
    <div className="text-center">
      <LinkButton to={linkTo}>Navigate after data fetching</LinkButton>
    </div>
  </>
);
