import React from "react";
import { Page } from "components/Page";
import { PageTitle } from "components/PageTitle";
import { Alert } from "components/Alert";
import { ExternalLink } from "components/ExternalLink";
import { Button } from "components/Button";
import { sleep } from "Utils";

export default function ThirdPage({ history, user }) {
  return (
    <Page>
      <PageTitle>Third page</PageTitle>

      <Alert kind="info">
        This page fetches a random profile from{" "}
        <ExternalLink to="https://randomuser.me/">
          random user generator api
        </ExternalLink>
        .
        <br />
        The navigation is halted until the data is fetched from the API.
      </Alert>

      <div className="p-4 md:p-12 mt-10 text-center">
        <div
          className="block rounded-full shadow-xl mx-auto -mt-16 h-32 w-32 bg-cover bg-center"
          style={{
            backgroundImage: `url('${user.picture.large}')`
          }}
        ></div>

        <h1 className="text-2xl font-bold text-blue-600 pt-8">
          {user.name.title + " " + user.name.first + " " + user.name.last}
        </h1>
        <div className="mx-auto w-4/5 pt-3 border-b-2 border-blue-500 opacity-25"></div>
        <p className="pt-4 text-base text-gray-700 text-center">
          <ExternalLink to={`email:${user.email}`}>{user.email}</ExternalLink>
          <br />
          <span>Phone: {user.phone}</span>
          <br />
          <span>Mobile: {user.cell}</span>
        </p>
        <p className="pt-2 text-gray-600 text-xs flex items-center justify-center">
          Location: {user.location.coordinates.latitude}° N,{" "}
          {user.location.coordinates.longitude}° W
        </p>
      </div>
      <div className="text-center">
        <Button onClick={() => history.goBack()}>Go Back</Button>
      </div>
    </Page>
  );
}

ThirdPage.getInitialProps = async function getInitialProps() {
  await sleep(1000);
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  return {
    user: data.results[0]
  };
};
