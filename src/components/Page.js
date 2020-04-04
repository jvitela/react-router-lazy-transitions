import React, { useEffect } from "react";

export const Page = ({ className, scrollTop, children }) => {
  useEffect(() => {
    if (scrollTop) {
      window.scrollTo(0, 0);
    }
  }, [scrollTop]);
  return (
    <div className="w-full">
      <div
        className={`max-w-screen-lg mx-auto py-6 px-6 md:px-12 bg-white ${className}`}
      >
        {children}
      </div>
    </div>
  );
};
