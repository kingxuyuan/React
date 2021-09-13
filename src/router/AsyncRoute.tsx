import { FC, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { RouteTypes } from './router';

interface AsyncRouteProps extends RouteTypes { }

const AsyncRoute: FC<AsyncRouteProps> = (props) => {
    useEffect(() => {
        
        // !flag && window.location.replace('/404');
    }, []);
    
    return (
        <Route {...props} />
    );
}

export default AsyncRoute;