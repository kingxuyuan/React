import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const Login = lazy(() => import('./views/Login/Login'));
const Layout = lazy(() => import('./views/Layout/Layout'));
const NotFound = lazy(() => import('./views/NotFound/NotFound'));

function App() {
    return (
        <div className="App">
            <Router>
                <Suspense fallback={null}>
                    <Switch>
                        <Route path='/' exact={true} strict={true} component={() => <Redirect to="/layout/home" />} />
                        <Route path='/layout' component={Layout} />
                        <Route path='/login' component={Login} />
                        <Route path='*' exact={true} strict={true} component={NotFound} />
                    </Switch>
                </Suspense>
            </Router>
        </div >
    );
}

export default App;