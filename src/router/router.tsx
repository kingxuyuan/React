import { lazy } from "react";
import { Redirect } from "react-router-dom";
import { RouteConfig } from "react-router-config";
import { HomeOutlined, DashboardOutlined, UserOutlined, FileImageOutlined } from "@ant-design/icons";

import Home from "../views/Home/Home";

import Error403 from "../views/Exception/Error403";
import Error404 from "../views/Exception/Error404";
import Error500 from "../views/Exception/Error500";

import Analysis from "../views/Dashboard/Analysis";
import Monitor from "../views/Dashboard/Monitor";
import Workbench from "../views/Dashboard/Workbench";

import Person from "../views/Mine/Person";

import Setting from "../views/Mine/Setting";

export interface RouterConfig extends RouteConfig {
    title?: string;
    describe?: string;
    requireAuth?: boolean;
    children?: RouterConfig[];
    path: string;
    breadcrumb?: string[];
    icon?: any;
}

const router: RouterConfig[] = [
    {
        title: "首页",
        path: "/app/home",
        exact: true,
        icon: <HomeOutlined />,
        // component: lazy(() => import(/* home */ "../views/Home/Home")),
        component: Home,
    },
    {
        title: "异常页",
        path: "/app/exception",
        exact: true,
        icon: <FileImageOutlined />,
        children: [
            {
                title: "异常403",
                path: "/app/exception/error403",
                exact: true,
                requireAuth: true,
                breadcrumb: ["首页", "异常页", "异常403"],
                // component: lazy(() => import(/* home */ "../views/Exception/Error403")),
                component: Error403,
            },
            {
                title: "异常404",
                path: "/app/exception/error404",
                exact: true,
                requireAuth: true,
                breadcrumb: ["首页", "异常页", "异常404"],
                // component: lazy(() => import(/* home */ "../views/Exception/Error404")),
                component: Error404,
            },
            {
                title: "异常500",
                path: "/app/exception/error500",
                exact: true,
                requireAuth: true,
                breadcrumb: ["首页", "异常页", "异常500"],
                // component: lazy(() => import(/* home */ "../views/Exception/Error500")),
                component: Error500,
            },
        ],
    },
    {
        title: "仪表盘",
        path: "/app/dashboard",
        exact: true,
        icon: <DashboardOutlined />,
        children: [
            {
                title: "分析页",
                path: "/app/dashboard/analysis",
                exact: true,
                requireAuth: true,
                breadcrumb: ["首页", "分析页"],
                // component: lazy(() => import(/* home */ "../views/Dashboard/Analysis")),
                component: Analysis,
            },
            {
                title: "监控页",
                path: "/app/dashboard/monitor",
                exact: true,
                requireAuth: true,
                breadcrumb: ["首页", "监控页"],
                // component: lazy(() => import(/* home */ "../views/Dashboard/Monitor")),
                component: Monitor,
            },
            {
                title: "工作台",
                path: "/app/dashboard/workbench",
                exact: true,
                requireAuth: true,
                breadcrumb: ["首页", "工作台"],
                // component: lazy(() => import(/* home */ "../views/Dashboard/Workbench")),
                component: Workbench,
            },
        ],
    },
    {
        title: "我的",
        path: "/app/mine",
        exact: true,
        icon: <UserOutlined />,
        children: [
            {
                title: "个人中心",
                path: "/app/mine/person",
                exact: true,
                requireAuth: true,
                breadcrumb: ["首页", "我的", "个人中心"],
                // component: lazy(() => import(/* home */ "../views/Mine/Person")),
                component: Person,
            },
            {
                title: "个人设置",
                path: "/app/mine/setting",
                exact: true,
                requireAuth: true,
                breadcrumb: ["首页", "我的", "个人设置"],
                // component: lazy(() => import(/* home */ "../views/Mine/Setting")),
                component: Setting,
            },
        ],
    },
    //  {
    //     path: "/login",
    //     exact: true,
    //     component: lazy(() => import(/* home */ "../views/Login/Login")),
    // },
    // {
    //     path: "*",
    //     exact: true,
    //     component: lazy(() => import(/* home */ "../views/NotFound/NotFound")),
    // },
];

export default router;
