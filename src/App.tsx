import { ComponentType, FC, memo, Suspense, useState, createContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { compose } from "redux";

import store from "./store";

import { watchToken } from "./store/actions/token";

import WithAntConfig from "./components/HOC/WithAntConfig";
import WithReduxProvider from "./components/HOC/WithReduxProvider";
import WithErrorScreen from "./components/ErrorScreen/WithErrorScreen";

import Login from "./views/Login/Login";
import DefaultLayout from "./Layout/DefaultLayout";
import NotFound from "./views/NotFound/NotFound";

export const RouteContext = createContext({ changeRroute: () => {} });

interface AppProps {}

const MainRoute = (props: any) => {
    const dispatch = useDispatch();

    const [, setRef] = useState("");

    const changeRroute = () => {
        dispatch(watchToken());
        // setRef(window.location.pathname);
    };

    return (
        <RouteContext.Provider value={{ changeRroute }}>
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/app/home" push />} />
                    <Route path="/app" component={DefaultLayout}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="*" component={NotFound}></Route>
                </Switch>
            </Router>
        </RouteContext.Provider>
    );
};

const renderCom: (C: ComponentType) => ComponentType = compose(WithReduxProvider(store), WithErrorScreen, WithAntConfig);

const RootComponent = renderCom(memo(MainRoute));

const App: FC<AppProps> = () => <RootComponent />;

export default memo(App);
