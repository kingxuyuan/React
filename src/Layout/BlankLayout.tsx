import { FC } from "react";

interface BlankLayoutProps {}

const BlankLayout: FC<BlankLayoutProps> = (props: any) => {
    return (
        <div className="blank-layout">
            <h1>空白页面</h1>
            {props.children}
        </div>
    );
};

export default BlankLayout;
