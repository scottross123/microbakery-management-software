import { ReactNode } from "react";
import { Home, Dashboard, Business, Calendar, Table, Sales, Costs, Inventory, Profile, Options, Contact, Details } from "../pages/exports";

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
        props: { table: 'customer' },
    },

    {
        path: '/orders',
        element: Table,
        props: { table: 'order' },
    },

    {
        path: '/products',
        element: Table,
        props: { table: 'product' },
    },

    {
        path: '/ingredients',
        element: Table,
        props: { table: 'ingredient' },
    },

    {
        path: '/suppliers',
        element: Table,
        props: { table: 'supplier' },
    },

    {
        path: 'customers/details',
        element: Details,
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