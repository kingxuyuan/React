import { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Button, message } from 'antd';

import { fetchSetToken } from '../../store/actions/token';
import { getToken } from '../../store/selectors/token';

interface LoginProps { }

const Login: FC<LoginProps> = (props) => {
    const history = useHistory();
    const token = useSelector(getToken);
    const dispatch = useDispatch();

    const loginFn = useCallback(() => {
        dispatch(fetchSetToken('asdwdasdsadsa+=', () => {
            message.success('登陆成功！');
            history.replace('/');
        }))
    }, [dispatch, history])



    useEffect(() => {
        token && history.replace('/');
    }, [history, token])

    return (
        <div className="login">
            <h1>登录页面</h1>
            <Button type="primary" onClick={() => loginFn()}>登录，去首页</Button>
        </div>
    );
}

export default Login;