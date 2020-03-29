import { NoneFound } from 'pages/NoneFound/NoneFound';
import { HomePage } from 'pages/Home/HomePage'
import { FourthPage } from 'pages/Fourth/FourthPage'
import { AbortPage } from 'pages/Abort/AbortPage'
import { MockFetchFailure } from 'Utils'

const mockedImport = new MockFetchFailure();

export default function getRoutes() {
    return [
        {
            path: '/',
            component: HomePage,
            links: {
                next: '/second'
            }
        },
        {
            path: '/second',
            importComponent: () => import('pages/Second/SecondPage'),
            links: {
                prev: '/',
                next: '/third',
                abort: '/abort'
            }
        },
        {
            path: '/third',
            importComponent: () => import('pages/Third/ThirdPage'),
            links: {
                prev: '/second',
                next: '/fourth'
            }
        },
        {
            path: '/fourth',
            importComponent: mockedImport.proxy({ default: FourthPage }),
            fetchOptions: {
                maxRetries: 3,
                retryInterval: 1000,
                maxRetryInterval: 2000,
                onFail: mockedImport.onFail,
                onReady: mockedImport.onReady,
                canRetry: mockedImport.canRetry
            },
            links: {
                prev: '/third',
                next: '/',
            }
        },
        {
            path: '/abort',
            component: AbortPage,
            links: {
                prev: '/second'
            }
        },
        {
            id: 'none-found',
            component: NoneFound,
            links: {
                home: '/'
            }
        }
    ];
}
