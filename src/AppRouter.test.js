import React from "react";
import { Router, Link } from "react-router-dom";
import {
  render,
  waitFor,
  waitForElementToBeRemoved,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import { AnimationApp } from "./AppRouter";

const Home = () => (
  <div>
    <h1 data-testid="home-title">Home</h1>
    <Link to="/about" data-testid="home-link">
      About
    </Link>
  </div>
);

const About = () => (
  <div>
    <h1 data-testid="about-title">About</h1>
  </div>
);

const NotFound = () => (
  <div>
    <h1 data-testid="404-title">404 Not Found</h1>
  </div>
);

test("full app rendering/navigating", async () => {
  const history = createMemoryHistory();
  const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
  ];

  const { getByTestId, queryByTestId } = render(
    <Router history={history}>
      <AnimationApp animation={{ timeout: 100 }} routes={routes} />
    </Router>
  );

  // wait for appearance of home page
  await waitFor(() => {
    expect(getByTestId("home-title")).toBeInTheDocument();
  });

  // Click the link to navigate
  const linkElement = getByTestId("home-link");
  expect(linkElement).toBeInTheDocument();
  fireEvent.click(linkElement);

  // Both pages should display as part of the transition
  await waitFor(() => {
    expect(getByTestId("home-title")).toBeInTheDocument();
    expect(getByTestId("about-title")).toBeInTheDocument();
  });

  // Home page should dissapear
  await waitForElementToBeRemoved(() => queryByTestId("home-title"));
  // About page should remain
  expect(getByTestId("about-title")).toBeInTheDocument();
});

test("landing on a bad page shows 404 page", async () => {
  const history = createMemoryHistory();
  history.push("/some/bad/route");
  const routes = [{ path: "/", component: Home }, { component: NotFound }];
  const { getByTestId } = render(
    <Router history={history}>
      <AnimationApp animation={{ timeout: 100 }} routes={routes} />
    </Router>
  );
  await waitFor(() => {
    expect(getByTestId("404-title")).toBeInTheDocument();
  });
});

test("calls getInitialProps before rendering the route", async () => {
  const history = createMemoryHistory();
  const TestPage = () => (
    <div>
      <h1 data-testid="page-title">Ready</h1>
    </div>
  );

  TestPage.getInitialProps = jest.fn();
  const routes = [{ component: TestPage }];
  const screen = render(
    <Router history={history}>
      <AnimationApp animation={{ timeout: 100 }} routes={routes} />
    </Router>
  );

  // Check page is not rendered immediately
  expect(screen.queryByTestId("page-title")).not.toBeInTheDocument();
  // wait for getInitialProps to be called
  await waitFor(() => {
    expect(TestPage.getInitialProps).toHaveBeenCalled();
  });
  // wait for the component to render
  await waitFor(() => {
    expect(screen.getByTestId("page-title")).toBeInTheDocument();
  });
});

test("calls onEnter* methods", async () => {
  const history = createMemoryHistory();
  const TestPage = () => (
    <div>
      <h1 data-testid="page-title">Ready</h1>
    </div>
  );

  TestPage.getInitialProps = jest.fn();
  const routes = [{ component: TestPage }];
  const animation = {
    timeout: 100,
    onEnter: jest.fn(),
    onEntering: jest.fn(),
    onEntered: jest.fn(),
  };
  render(
    <Router history={history}>
      <AnimationApp animation={animation} routes={routes} />
    </Router>
  );

  // Check that the component renders
  await waitFor(() => {
    expect(animation.onEnter).toHaveBeenCalled();
    expect(animation.onEntering).toHaveBeenCalled();
    expect(animation.onEntered).toHaveBeenCalled();
  });
});

test("calls onExit* methods", async () => {
  const history = createMemoryHistory();
  const TestPage = () => (
    <div>
      <h1 data-testid="page-title">Ready</h1>
    </div>
  );

  TestPage.getInitialProps = jest.fn();
  const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
  ];
  const animation = {
    timeout: 100,
    onExit: jest.fn(),
    onExiting: jest.fn(),
    onExited: jest.fn(),
  };
  const { getByTestId } = render(
    <Router history={history}>
      <AnimationApp animation={animation} routes={routes} />
    </Router>
  );

  // wait for appearance of home page
  await waitFor(() => {
    expect(getByTestId("home-link")).toBeInTheDocument();
  });

  // Click the link to navigate
  const linkElement = getByTestId("home-link");
  fireEvent.click(linkElement);

  // Check that the component renders
  await waitFor(() => {
    expect(animation.onExit).toHaveBeenCalled();
    expect(animation.onExiting).toHaveBeenCalled();
    expect(animation.onExited).toHaveBeenCalled();
  });
});
