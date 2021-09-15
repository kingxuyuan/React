import { useEffect, useContext } from "react";
import { Route } from "react-router-dom";
import { RouterConfig } from "./router";
import { RouteContext } from "../App";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

interface Props extends RouterConfig { }

const AsyncRoute = (props: Props) => {
    
    const { changeRroute } = useContext(RouteContext);
    useEffect(() => {
      console.log(2222);
      
        NProgress.done();
        changeRroute();
        return () => {
            NProgress.start();
        };
    }, []);

    return <Route {...props} />;
};

export default AsyncRoute;