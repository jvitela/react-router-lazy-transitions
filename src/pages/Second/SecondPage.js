import React, { useState } from "react";
import { Button } from "components/Button";
import { LinkButton } from "components/LinkButton";
import { ExternalLink } from "components/ExternalLink";

export default function SecondPage(props) {
  const [isLoading, setLoading] = useState(false);
  console.log("SecondPage::render");
  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto flex p-6 bg-white rounded-lg shadow mt-4">
        <div className="pt-1">
          <h4 className="text-xl text-gray-900 leading-tight">Second page</h4>
          <p className="text-base text-gray-600 leading-normal mb-2">
            The{" "}
            <ExternalLink to="https://reactcommunity.org/react-transition-group/css-transition#CSSTransition-prop-classNames">
              CSSTransition
            </ExternalLink>{" "}
            component uses classNames property "container--fade" The animation
            classNames are applied to the component as it appears, enters, exits
            or has finished the transition. A single className "container--fade"
            is provided and it will be suffixed for each stage:
          </p>
          <ol className="py-3 pl-6 pr-3 text-base text-blue-700 list-disc list-inside">
            <li>container--fade-appear</li>
            <li>container--fade-appear-active</li>
            <li>container--fade-appear-done</li>
            <li>container--fade-enter</li>
            <li>container--fade-enter-active</li>
            <li>container--fade-enter-done</li>
            <li>container--fade-exit</li>
            <li>container--fade-exit-active</li>
            <li>container--fade-exit-done</li>
          </ol>

          <p className="text-base text-gray-600 leading-normal mb-2">
            A component can be specified as loading indicator. This component
            will be rendered at each page transition, this is specially useful
            when a page needs to fetch async data before rendering.
          </p>

          <p className="text-base text-gray-600 leading-normal mb-2">
            <Button
              onClick={() => {
                setLoading("back");
                props.history.push(props.links.prev);
              }}
            >
              {isLoading === "back" ? "Loading ..." : "Back"}
            </Button>
            <LinkButton
              to={props.links.next}
              onClick={() => setLoading("next")}
            >
              {isLoading === "next" ? "Loading ..." : "Next"}
            </LinkButton>
            <LinkButton
              to={"/broken-link"}
              onClick={() => setLoading("broken")}
              textColor="text-red-500 hover:text-red-700"
            >
              {isLoading === "broken" ? "Loading ..." : "Broken link"}
            </LinkButton>
            <LinkButton
              to={props.links.abort}
              onClick={() => setLoading("abort")}
              textColor="text-red-500 hover:text-red-700"
            >
              {isLoading === "abort"
                ? "Loading ..."
                : "getInitialProps failure"}
            </LinkButton>
          </p>
        </div>
      </div>
    </div>
  );
}
