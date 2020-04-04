import React, { useState } from "react";

export const Button = ({
  bgColor = "bg-blue-500 hover:bg-blue-700",
  textColor = "text-white",
  onClick,
  children,
  ...props
}) => {
  const [isLoading, setLoading] = useState(false);
  return (
    <button
      {...props}
      className={`${bgColor} ${textColor} font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
      disabled={isLoading}
      onClick={evt => {
        setLoading(true);
        onClick(evt);
      }}
    >
      {isLoading ? "Loading ..." : children}
    </button>
  );
};
