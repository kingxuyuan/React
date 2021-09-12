import { Route } from 'react-router-dom';
import { RouteTypes } from './router';

const renderRouter = (router: RouteTypes[], auth: string, requireAuth = '/login') => {
    return router ? router.map((item: RouteTypes, idx: number) => {
        const Component = item.component;

        return <Route
            key={item.key || idx}
            path={item.path}
            exact={item.exact}
            component={Component}
        />

    }) : null
}

export default renderRouter;