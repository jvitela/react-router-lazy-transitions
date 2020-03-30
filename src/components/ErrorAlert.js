import React from "react";

export const ErrorAlert = ({ children }) => (
  <div
    className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 w-full"
    role="alert"
  >
    {children}
  </div>
);
