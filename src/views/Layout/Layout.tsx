import { FC, useEffect } from 'react';
import { Switch, RouteComponentProps, useHistory } from 'react-router-dom';
import './index.scss';

import { mainRouter,RouteTypes } from '../../router/router';
import renderRouter from '../../router/renderRouter';
import Siderbar from '../../components/Siderbar/Slider';

interface LayoutProps extends RouteComponentProps { }

const flatFn = (arr: RouteTypes[]): string[] => {
    return arr.map((item: RouteTypes) => {
        if (item.children) {
            return flatFn(item.children);
        }
        return item.path
    }).flat()
}

const Layout: FC<LayoutProps> = (props) => {
    const history = useHistory();
    const is404 = flatFn(mainRouter).some(item => item === props.location.pathname);

    useEffect(() => {
        !is404 && history.replace('/404');
    }, [])

    return (
        <div className="layout">
            <div className="layout-slider">
                <div className="layout-slider-top">
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="" />
                    <h1>React 后台管理系统</h1>
                </div>
                <Siderbar {...props} />
            </div>
            <div className="layout-section">
                <div className="layout-header">
                    <h2>头部</h2>
                </div>
                <div className="layout-main">
                    <Switch>{renderRouter(mainRouter)}</Switch>
                </div>
            </div>
        </div>
    );
}

export default Layout;