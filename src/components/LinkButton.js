import React from "react";
import { Link } from "react-router-dom";

export const LinkButton = ({
  to,
  textColor = "text-blue-500 hover:text-blue-700",
  bgColor = "hover:bg-gray-100",
  children,
  ...props
}) => (
  <Link
    {...props}
    to={to}
    className={`${textColor} ${bgColor} underline py-2 px-4 inline-block text-center`}
  >
    {children}
  </Link>
);
