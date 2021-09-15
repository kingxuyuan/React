import { FC } from "react";
import { Link } from "react-router-dom";

interface MineProps {}

const Mine: FC<MineProps> = (props) => {
    return (
        <div className="mine">
            <h1>后台管理系统</h1>
            <div>
                <Link to="/">返回首页</Link>
            </div>
            <div>
                <Link to="/mine/person">个人中心</Link>
            </div>
            <div>
                <Link to="/mine/personss">404</Link>
            </div>
        </div>
    );
};

export default Mine;
