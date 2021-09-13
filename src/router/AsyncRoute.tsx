import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

import { getToken } from '../store/actions/token';
import { RouteTypes } from './router';

nprogress.configure({ showSpinner: false });

interface AsyncRouteProps extends RouteTypes { };

const AsyncRoute: FC<AsyncRouteProps> = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        nprogress.done();
        return () => {
            dispatch(getToken());
            nprogress.start();
        }
    }, []);

    return (
        <Route {...props} />
    );
}

export default AsyncRoute;