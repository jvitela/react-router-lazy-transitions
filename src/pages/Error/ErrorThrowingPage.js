import React from "react";

export const ErrorThrowingPage = () => (
  <p>This page throws an error when loading</p>
);

ErrorThrowingPage.getInitialProps = () => {
  throw new Error("This error was thrown from the page component");
};
