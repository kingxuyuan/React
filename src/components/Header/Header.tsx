import { FC } from "react";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumb } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { getSider } from "../../store/selectors/sider";
import { changeSiderState } from "../../store/actions/sider";
import user from "../../assets/images/user.gif";
interface HeaderProps {}
// Unfold
const Header: FC<HeaderProps> = (props) => {
    const dispatch = useDispatch();
    const siderState = useSelector(getSider);

    const changeSiderStateFn = () => {
        dispatch(changeSiderState(!siderState));
    };

    return (
        <div className="layout-content-header">
            <div className="layout-content-header-navbar">
                <div className="layout-content-header-navbar-left">
                    <div className="unfold" onClick={() => changeSiderStateFn()}>
                        {siderState ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </div>
                    <Breadcrumb>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="layout-content-header-navbar-right">
                    <img src={user} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;
