import { RouteConfig } from 'react-router-config';
import { HomeOutlined, DashboardOutlined, TeamOutlined } from '@ant-design/icons';

import Home from '../views/Home/Home';
import Analysis from '../views/Dashboard/Analysis';
import Monitor from '../views/Dashboard/Monitor';
import Workbench from '../views/Dashboard/Workbench';
import Person from '../views/Mine/Person';
import Setting from '../views/Mine/Setting';

export interface RouteTypes extends RouteConfig {
    path: string,
    title?: string,
    require?: boolean
    children?: RouteTypes[]
    icon?: any
}

const router: RouteTypes[] = [
    {
        title: '首页',
        path: '/layout/home',
        exact: true,
        require: true,
        icon: <HomeOutlined />,
        component: Home
    }, {
        title: '仪表盘',
        path: '/layout/dashboard',
        icon: <DashboardOutlined />,
        children: [
            {
                title: '分析页',
                path: '/layout/dashboard/analysis',
                exact: true,
                require: true,
                component: Analysis
            }, {
                title: '控制页',
                path: '/layout/dashboard/monitor',
                exact: true,
                require: true,
                component: Monitor
            }, {
                title: '工作台',
                path: '/layout/dashboard/workbench',
                exact: true,
                require: true,
                component: Workbench
            },
        ]
    }, {
        title: '个人中心',
        path: '/layout/mine',
        icon: <TeamOutlined />,
        children: [
            {
                title: '个人信息',
                path: '/layout/mine/person',
                exact: true,
                require: true,
                component: Person
            }, {
                title: '个人设置',
                path: '/layout/mine/setting',
                exact: true,
                require: true,
                component: Setting
            }
        ]
    }
]

export default router;