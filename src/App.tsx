import { Suspense, ComponentType } from 'react';
import { compose } from 'redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

import { whiteList } from './router/router';
import renderRouter from './router/renderRouter';

import withReduxProvider from './components/HOC/withReduxProvider';

const MainRoute = () => {

    return (
        <Router>
            <Suspense fallback={null}>
                <Switch>
                    {renderRouter(whiteList)}
                </Switch>
            </Suspense>
        </Router>
    )
}

const renderComponent: (C: ComponentType) => ComponentType = compose(
    withReduxProvider()
)

const RootComponent = renderComponent(MainRoute)

const App = () => <RootComponent />;

export default App;