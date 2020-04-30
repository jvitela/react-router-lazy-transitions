import React from "react";

export const SectionTitle = ({ children }) => (
  <h1
    className="text-2xl font-display leading-tight text-blue-400 bg-gray-100 my-2 py-4 border-t border-b border-blue-200"
    style={{
      paddingLeft: "25%",
      marginLeft: "-25%",
      width: "150%",
    }}
  >
    {children}
  </h1>
);
