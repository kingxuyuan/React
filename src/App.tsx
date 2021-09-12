import React, { Suspense, lazy, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import router from './router/router';
import renderRoutes from './router/renderRoutes';

const Layout = lazy(() => import('./views/Layout/Layout'));

function App() {
    const routers = router.mainRouter.concat(router.whiteRouter);
    const flag = routers.some(item => item.path === window.location.pathname);
    useEffect(() => {
        !flag && window.location.replace('/404');
    }, [window.location.pathname]);

    return (
        <div className="App">
            <Router>
                <Suspense fallback={<div>加载中...</div>}>
                    <Switch>
                        {renderRoutes(router.whiteRouter, '')}
                        {flag && <Route component={Layout} />}
                    </Switch>
                </Suspense>
            </Router>
        </div >
    );
}

export default App;
