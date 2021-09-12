import { FC } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router';

interface LoginProps {

}

const Login: FC<LoginProps> = (props) => {
    const history = useHistory();
    const backHome = () => {
        history.replace('/');
    }
    return (
        <div className="login">
            <h1>登录页面</h1>
            <Button type="primary" onClick={() => backHome()}>去首页</Button>
        </div>
    );
}

export default Login;