import Home from 'pages/Home/Home'

export default function getRoutes() {
    return [
        {
            path: '/',
            component: Home,
            links: {
                success: '/search'
            }
        },
        {
            path: '/search',
            importComponent: () => import('pages/Search/Search'),
            links: {
                success: '/flights',
                cancel: '/'
            }
        },
        {
            path: '/flights',
            importComponent: () => import('pages/Flights/Flights'),
            links: {
                cancel: '/'
            }
        }
    ];
}
