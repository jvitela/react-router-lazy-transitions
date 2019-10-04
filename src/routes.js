import Home from 'pages/Home/Home'
// import Search from 'pages/Search/Search'
// import Flights from 'pages/Flights/Flights'

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
            // component: Search,
            importComponent: () => import('pages/Search/Search'),
            links: {
                success: '/flights',
                cancel: '/'
            }
        },
        {
            path: '/flights',
            // component: Flights,
            importComponent: () => import('pages/Flights/Flights'),
            links: {
                cancel: '/'
            }
        }
    ];
}
