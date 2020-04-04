import React from "react";

export const Alert = ({ children, kind = null }) => {
  const clr = getAlertColor(kind);
  return (
    <div
      className={`bg-${clr}-100 border-l-4 border-${clr}-500 text-${clr}-700 p-4 w-full`}
      role="alert"
    >
      {children}
    </div>
  );
};

function getAlertColor(kind) {
  switch (kind) {
    case "info":
      return "blue";
    case "error":
      return "red";
    default:
      return "gray";
  }
}
