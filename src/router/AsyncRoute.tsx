import { FC, useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

import { RouteTypes } from './router';

nprogress.configure({ showSpinner: false });

interface AsyncRouteProps extends RouteTypes { };

const AsyncRoute: FC<AsyncRouteProps> = (props) => {
    const history = useHistory()
    useEffect(() => {
        nprogress.done();
        return () => {
            nprogress.start();
        }
    }, [history.location.pathname]);

    return (
        <Route {...props} />
    );
}

export default AsyncRoute;