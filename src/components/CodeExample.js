import React from "react";
const { Prism } = window;

export const CodeExample = ({ title, children }) => {
  const __html = Prism.highlight(children, Prism.languages.jsx, "jsx");
  return (
    <>
      {title && <h4 className="text-blue-600 my-3">{title}</h4>}
      <pre className="language-jsx max-w-full">
        <code className="language-jsx" dangerouslySetInnerHTML={{ __html }} />
      </pre>
    </>
  );
};
