import React from "react";

export const Page = ({ className, children }) => (
  <div className="w-full">
    <div
      className={`max-w-3xl mx-auto p-6 bg-white rounded-lg shadow mt-4 ${className}`}
    >
      {children}
    </div>
  </div>
);
