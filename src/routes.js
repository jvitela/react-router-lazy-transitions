import { NoneFound } from 'pages/NoneFound/NoneFound';
import { HomePage } from 'pages/Home/HomePage'

export default function getRoutes() {
    return [
        {
            path: '/',
            component: HomePage,
            links: {
                success: '/second'
            }
        },
        {
            path: '/second',
            importComponent: () => import('pages/Second/SecondPage'),
            links: {
                success: '/third',
                cancel: '/'
            }
        },
        {
            path: '/third',
            importComponent: () => import('pages/Third/ThirdPage'),
            links: {
                cancel: '/'
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
