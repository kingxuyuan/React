import { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';

export interface RouteTypes extends RouteConfig {
    path?: string,
    title?: string,
    require?: boolean
}

const whiteRouter: RouteTypes[] = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/home" />
    }, {
        path: '/login',
        exact: true,
        component: lazy(() => import(/* home */ '../views/Login/Login'))
    }, {
        path: '/404',
        exact: true,
        component: lazy(() => import(/* home */ '../views/NotFound/NotFound'))
    }
];

const mainRouter: RouteTypes[] = [
    {
        path: '/home',
        exact: true,
        require: true,
        component: lazy(() => import(/* home */ '../views/Home/Home'))
    },
]

const router = {
    mainRouter,
    whiteRouter
}

export default router;