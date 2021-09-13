import { ComponentType } from 'react';
import { Provider } from 'react-redux';
import store from '../../store/index';

export default function withReduxProvider(): any {
    return (PackageComponents: ComponentType) => {
        const NewComponent: ComponentType = (props) => (
            <Provider store={store}>
                <PackageComponents {...props} />
            </Provider>
        )
        NewComponent.displayName = `withReduxProvider(${PackageComponents.displayName || PackageComponents.name})`;
        return NewComponent;
    };
}