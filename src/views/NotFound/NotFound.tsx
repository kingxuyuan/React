import { FC } from "react";
import { useHistory } from "react-router-dom";
import { Result, Button } from "antd";

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => {
    const history = useHistory();

    const backHome = () => {
        history.push("/app/home");
    };
    return (
        <div className="notfound">
            <Result
                status="404"
                title="404"
                subTitle="404 ... 找不到您访问的页面"
                extra={
                    <Button type="primary" onClick={() => backHome()}>
                        返回首页
                    </Button>
                }
            />
            ,
        </div>
    );
};

export default NotFound;
