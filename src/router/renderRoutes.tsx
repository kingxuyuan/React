import { Redirect } from 'react-router-dom';
import { RouteTypes } from './router';
import AsyncRoute from './AsyncRoute';

const renderRouter = (arr: RouteTypes[], auth: string, requireAuth = '/login'): any => {
    return arr ? arr.map((item: RouteTypes, idx: number) => {
        const Component: any = item.component;
        if (item.children) {
            return renderRouter(item.children, auth);
        }
        return <AsyncRoute
            key={item.key || idx}
            path={item.path}
            exact={item.exact}
            component={(props: any) => {
                if (!item.require || auth || item.path === requireAuth) {
                    return <Component {...props} />
                }
                return <Redirect to={{ pathname: requireAuth, state: { prev: item.location } }} />
            }}
        />
    }) : null
}

export default renderRouter;