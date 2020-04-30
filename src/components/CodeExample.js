import React from "react";
const { Prism } = window;

export const CodeExample = ({ title, children }) => {
  const __html = Prism.highlight(children, Prism.languages.jsx, "jsx");
  return (
    <>
      {title && <h4 className="text-blue-600 my-3">{title}</h4>}
      <pre className="max-w-full overflow-auto bg-gray-100 px-2 md:px-6 border-l-4 border-orange-500 mb-4 shadow-md">
        <code className="text-sm" dangerouslySetInnerHTML={{ __html }} />
      </pre>
    </>
  );
};
