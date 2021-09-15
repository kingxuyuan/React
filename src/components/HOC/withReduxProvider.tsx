import { ComponentType } from "react";
import { Provider } from "react-redux";
import { AnyAction, Store } from "redux";

function WithReduxProvider<Props, Action = AnyAction>(store: Store<Action>) {
    return (WapperedComponent: ComponentType<Props>) => {
        const Component: ComponentType<Props> = (props) => (
            <Provider store={store}>
                <WapperedComponent {...props} />
            </Provider>
        );

        Component.displayName = `withReduxProvider(${WapperedComponent.displayName || WapperedComponent.name})`;

        return Component;
    };
}

export default WithReduxProvider;
