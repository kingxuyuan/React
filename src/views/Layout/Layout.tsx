import { FC, useEffect } from 'react';
import { Switch, RouteComponentProps, useHistory } from 'react-router-dom';
import './index.scss';

import router, { RouteTypes } from '../../router/router';
import renderRoutes from '../../router/renderRoutes';
import Siderbar from '../../components/Siderbar/Siderbar';

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
    const is404 = flatFn(router).some(item => item === props.location.pathname);

    useEffect(() => {
        !is404 && history.replace('/404')
    }, [])

    return (
        <div className="layout">
            <Siderbar {...props} />
            <div className="layout-section">
                <div className="layout-header">
                    <h2>头部</h2>
                </div>
                <div className="layout-main">
                    <Switch>{renderRoutes(router, '55')}</Switch>
                </div>
            </div>
        </div>
    );
}

export default Layout;