import * as React from "react";
import { Result, Button } from "antd";
export interface IAppProps {}

export interface IAppState {
    renderError: boolean;
}
// React.PureComponent
export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            renderError: false,
        };
    }

    public componentDidMount() {
        window.addEventListener("error", this.listenerError);
        window.addEventListener("unhandledrejection", this.listenerError);
    }
    public componentWillUnmount() {
        window.removeEventListener("error", this.listenerError);
        window.removeEventListener("unhandledrejection", this.listenerError);
    }

    public componentDidCatch() {
        this.listenerError();
    }

    public static getDerivedStateFromError() {
        return { renderError: true };
    }

    public backHome = () => {
        window.location.replace("/app/home");
    };

    public render() {
        const Error = () => (
            <Result
                status="error"
                title="error"
                subTitle="程序出错."
                extra={
                    <Button type="primary" onClick={() => this.backHome()}>
                        返回首页
                    </Button>
                }
            />
        );

        return <div>{!this.state.renderError ? this.props.children : <Error />}</div>;
    }

    private listenerError = () => {
        this.setState({
            renderError: true,
        });
    };
}
