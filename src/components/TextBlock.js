import React from "react";

export const TextBlock = ({ children, element = "p" }) =>
  React.createElement(
    element,
    {
      className: "text-base text-gray-600 leading-normal mb-2",
    },
    children
  );
