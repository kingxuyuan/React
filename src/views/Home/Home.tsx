import { FC } from 'react';
import { Link } from 'react-router-dom';

interface HomeProps {

}

const Home: FC<HomeProps> = (props) => {
    return (
        <div className="home">
            首页
            <div><Link to="person">去个人中心</Link></div>
            <div><Link to="404">去404</Link></div>
            <div><Link to="login">去登录</Link></div>
        </div>
    );
}

export default Home;