import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, RouteComponentProps } from "react-router-dom";
import { Button, message } from "antd";
import { getToken } from "../../store/selectors/token";
import { fetchSetToken } from "../../store/actions/token";

interface LoginProps extends RouteComponentProps {}

const Login: FC<LoginProps> = (props: any) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const token = useSelector(getToken);
    const loginFn = () => {
        dispatch(
            fetchSetToken({ token: "dsfsfsdfsdfsty" }, () => {
                const prevUrl = props?.location?.state?.from?.pathname;
                const backUrl = prevUrl ? prevUrl : "/";
                message.success("登录成功！！！");
                history.replace(backUrl);
            }),
        );
    };

    useEffect(() => {
        token && history.replace("/login");
    }, [token]);

    return (
        <div className="login">
            <h1>请先登录</h1>
            <div>
                <Link to="home">返回首页</Link>
            </div>
            <p></p>
            <Button type="primary" onClick={() => loginFn()}>
                登录
            </Button>
        </div>
    );
};

export default Login;
