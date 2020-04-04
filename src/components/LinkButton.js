import React, { useState } from "react";
import { Link } from "react-router-dom";

export const LinkButton = ({
  to,
  textColor = "text-blue-500 hover:text-blue-700",
  bgColor = "bg-gray-100 hover:bg-gray-200",
  children,
  ...props
}) => {
  const [isLoading, setLoading] = useState(false);
  return (
    <Link
      {...props}
      to={to}
      className={`${textColor} ${bgColor} underline py-2 px-4 inline-block text-center`}
      onClick={() => setLoading(true)}
    >
      {isLoading ? "Loading ..." : children}
    </Link>
  );
};
