import { NoneFound } from "pages/NoneFound/NoneFound";
import { HomePage } from "pages/Home/HomePage";
import { FourthPage } from "pages/Fourth/FourthPage";
import { AbortPage } from "pages/Abort/AbortPage";
import { ErrorPage } from "pages/Error/ErrorPage";
import { ErrorThrowingPage } from "pages/Error/ErrorThrowingPage";
import { MockFetchFailure } from "Utils";

const mockedImport = new MockFetchFailure();

export default function getRoutes() {
  return [
    {
      path: "/",
      component: HomePage,
      links: {
        basicRouting: "/second",
        dataFetching: "/third",
        noneFound: "/foo_bar",
        retryOnFailure: "/fourth",
        cancelNavigation: "/abort",
        errorThrowingPage: "/throw-error"
      }
    },
    {
      path: "/second",
      importComponent: () => import("pages/Second/SecondPage")
    },
    {
      path: "/third",
      importComponent: () => import("pages/Third/ThirdPage")
    },
    {
      path: "/fourth",
      importComponent: mockedImport.proxy({ default: FourthPage }),
      fetchOptions: {
        maxRetries: 3,
        retryInterval: 2000,
        maxRetryInterval: 4000,
        onFail: mockedImport.onFail,
        onReady: mockedImport.onReady,
        canRetry: mockedImport.canRetry
      },
      links: {
        prev: "/third",
        next: "/"
      }
    },
    {
      path: "/abort",
      component: AbortPage
    },
    {
      path: "/throw-error",
      component: ErrorThrowingPage
    },
    {
      path: "/error",
      component: ErrorPage
    },
    {
      component: NoneFound,
      links: {
        home: "/"
      }
    }
  ];
}
