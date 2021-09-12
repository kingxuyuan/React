import { FC, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.scss';

interface LayoutProps {

}

const Home = lazy(() => import('../../views/Home/Home'));
const Person = lazy(() => import('../../views/Mine/Person'));

const Layout: FC<LayoutProps> = (props) => {
   
    return (
        <div className="layout">
            <div className="layout-siderbar">
                <h2>菜单</h2>
            </div>
            <div className="layout-section">
                <div className="layout-header">
                    <h2>头部</h2>
                </div>
                <div className="layout-main">
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/person" component={Person} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default Layout;