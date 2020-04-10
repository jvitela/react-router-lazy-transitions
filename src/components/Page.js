import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const PageCache = {};

export const Page = ({ className, scrollTop, children }) => {
  const pathname = useInitialPathname();
  const elemRef = useRef();

  useEffect(
    function restoreScrollPosition() {
      const elem = elemRef.current;
      if (scrollTop) {
        elem.scrollTop = 0;
      } else if (pathname in PageCache) {
        elem.scrollTop = PageCache[pathname];
      }
    },
    [pathname, elemRef]
  );

  const saveScrollPosition = () => {
    PageCache[pathname] = elemRef.current.scrollTop;
  };

  return (
    <div
      ref={elemRef}
      className="absolute left-0 top-0 right-0 bottom-0 overflow-auto"
      onScroll={saveScrollPosition}
    >
      <div
        className={`max-w-screen-xl mx-auto py-6 px-6 md:px-12 bg-white ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

/**
 * Returns the pathname at the moment the component was
 *  mounted into the page.
 */
function useInitialPathname() {
  const location = useLocation();
  const ref = useRef(location.pathname);
  return ref.current;
}
