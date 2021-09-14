import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RouteTypes } from './router';
import AsyncRoute from './AsyncRoute';
import { getToken } from '../store/selectors/token';

const RenderRouter = (arr: RouteTypes[], requireAuth = '/login'): any => {
    const auth =useSelector(getToken);
    return arr ? arr.map((item: RouteTypes, idx: number) => {
        const Component: any = item.component;
        if (item.children) {
            return RenderRouter(item.children, auth);
        }
        return <AsyncRoute
            key={item.key || idx}
            path={item.path}
            exact={item.exact}
            render={(props: any) => {
                if (!item.require || auth || item.path === requireAuth) {
                
                    return <Component {...props} />
                }
                return <Redirect to={{ pathname: requireAuth, state: { prev: item.location } }} />
            }}
        />
    }) : null
}

export default RenderRouter;