import { Redirect } from "react-router-dom";
import { RouterConfig } from "./router";
import AsyncRoute from "./AsyncRoute";

const RenderRoutes = (routes: RouterConfig[], auth: string, Props: any, authPath = "/login"): any => {
    return routes
        ? routes.map((route: RouterConfig, idx) => {
              const Com: any = route.component;
              const GlobalCom = (props: any) => {
                  const hasProps: boolean = Object.keys(Props).length > 0;
                  return hasProps ? <Com {...props} global={Props} /> : <Com {...props} />;
              };
              if (route.children) {
                  return RenderRoutes(route.children, auth, Props);
              }
              return (
                  <AsyncRoute
                      key={route.key || idx}
                      path={route.path}
                      exact={route.exact}
                      render={(props) => {
                          if (!route.requireAuth || auth || route.path === authPath) {
                              return <GlobalCom {...props} />;
                          }
                          return (
                              <Redirect
                                  to={{
                                      pathname: authPath,
                                      state: { from: props.location },
                                  }}
                              />
                          );
                      }}
                  />
              );
          })
        : null;
};

export default RenderRoutes;
