import { FC } from 'react';
import { Link } from 'react-router-dom';

interface PersonProps {

}

const Person: FC<PersonProps> = (props) => {
    return (
        <div className="person">
            <h1>个人中心</h1>
            <Link to="/">返回首页</Link>
            <div><Link to="/layout/mine/setting">个人设置</Link></div>
        </div>
    );
}

export default Person;