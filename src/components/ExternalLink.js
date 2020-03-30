import React from "react";

export const ExternalLink = ({
  to,
  textColor = "text-orange-400 hover:text-orange-500",
  children
}) => (
  <a
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    className={`${textColor} underline`}
  >
    {children}
  </a>
);
