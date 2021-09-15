import { ComponentType } from "react";
import moment from "moment";
import "moment/locale/zh-cn";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
// import en_US from 'antd/lib/locale/en_US';

moment.locale("en");
moment.locale("zh-cn");

function WithAntConfig<Props>(WapperedComponent: ComponentType<Props>) {
    const Component: ComponentType<Props> = (props: Props) => {
        return (
            <ConfigProvider locale={zhCN}>
                <WapperedComponent {...props} />
            </ConfigProvider>
        );
    };
    Component.displayName = `WithAntConfig(${WapperedComponent.displayName || WapperedComponent.name})`;
    return Component;
}

export default WithAntConfig;