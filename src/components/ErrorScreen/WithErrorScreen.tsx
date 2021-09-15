import { ComponentType } from "react";
import ErrorScreen from "./ErrorScreen";

function WithErrorScreen<Props>(WapperedComponent: ComponentType<Props>) {
    const Component: ComponentType<Props> = (props: Props) => {
        return (
            <ErrorScreen>
                <WapperedComponent {...props} />
            </ErrorScreen>
        );
    };
    return Component;
}

export default WithErrorScreen;
