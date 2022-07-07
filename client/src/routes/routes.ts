import { ReactNode } from "react";
import { Home, Business, Table, } from "../pages/exports";

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
        path: '/business',
        element: Business,
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

]

export default routes;

// maybe try useroutes hook?