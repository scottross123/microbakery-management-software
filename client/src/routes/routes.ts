import { ReactNode } from "react";
import { Home, Dashboard, Business, Calendar, Table, Sales, Costs, Inventory, Profile, Options, Contact, } from "../pages/exports";

export type route = {
    path: string,
    element: (() => ReactNode) | ((props: any) => ReactNode),
    props?: {},
}

const routes: route[] = [
    {
        path: '/',
        element: Home,
    },

    {
        path: '/dashboard',
        element: Dashboard,
    },

    {
        path: '/business',
        element: Business,
    },

    {
        path: '/calendar',
        element: Calendar,
    },

    {
        path: '/customers',
        element: Table,
    },

    {
        path: '/orders',
        element: Table,
    },

    {
        path: '/products',
        element: Table,
    },

    {
        path: '/ingredients',
        element: Table,
    },

    {
        path: '/suppliers',
        element: Table,
    },

    {
        path: '/costs',
        element: Costs,
    },

    {
        path: '/inventory',
        element: Inventory,
    },

    {
        path: '/sales',
        element: Sales,
    },

    {
        path: '/contact',
        element: Contact,
    },

    {
        path: '/options',
        element: Options,
    },

    {
        path: '/profile',
        element: Profile,
        props: { user: 'user' },
    },
]

export default routes;

// maybe try useroutes hook?