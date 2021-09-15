import { FC, memo, useEffect, useState, Suspense } from "react";
import { Menu } from "antd";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import "./index.scss";
import Header from "../components/Header/Header";
import menus, { RouterConfig } from "../router/router";

import { getSider } from "../store/selectors/sider";
import renderRoutes from "../router/renderRoutes";
import { getToken } from "../store/selectors/token";

interface LayoutProps {}

const { SubMenu } = Menu;
const blankRouteList = ["/", "/login", "*"];

const renderMenu = (list: RouterConfig[]): any => {
    return list.map((item) => {
        if (blankRouteList.includes(item.path)) return null;
        if (item.children) {
            return (
                <SubMenu key={item.path} title={item.title} icon={item.icon}>
                    {renderMenu(item.children)}
                </SubMenu>
            );
        }
        return (
            <Menu.Item key={item.path} title={item.title} icon={item.icon}>
                <Link to={item.path}>{item.title}</Link>
            </Menu.Item>
        );
    });
};

const DefaultLayout: FC<LayoutProps> = (props: any) => {
    const history = useHistory();
    const sider = useSelector(getSider);
    const rootMenuKeys: any[] = menus.filter((item) => !blankRouteList.includes(item.path)).map((item) => item.path);
    const oldOpenKeys = rootMenuKeys.filter((item) => history?.location?.pathname.includes(item));
    const [openKeys, setOpenKeys] = useState(oldOpenKeys);
    const [selectedKeys, setSelectedKeys] = useState([history?.location?.pathname]);
    const [siderWidth, setSiderWidth] = useState(210);

    const token = useSelector(getToken);

    const onOpenChange = (keys: string[]) => {
        // const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        setOpenKeys(keys);
        // if (rootMenuKeys.indexOf(latestOpenKey) === -1) {
        //     setOpenKeys(keys);
        // } else {
        //     setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        // }
    };
    const handleClick = (e: any) => {
        setSelectedKeys(e.key);
    };

    useEffect(() => {
        setOpenKeys(sider ? [] : oldOpenKeys);
        setSiderWidth(sider ? 60 : 210);
    }, [sider]);

    return (
        <div className="layout">
            <div className="layout-sider" style={{ width: siderWidth }}>
                <div className="layout-sider-logo">
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="" />
                    <h1 style={{ display: sider ? "none" : "block" }}>React 后台管理系统</h1>
                </div>
                <div className="layout-sider-menu">
                    <Menu
                        theme="dark"
                        style={{ width: "100%" }}
                        inlineCollapsed={sider}
                        // defaultOpenKeys={openKeys}
                        // defaultSelectedKeys={selectedKeys}
                        openKeys={openKeys}
                        selectedKeys={selectedKeys}
                        onClick={(e: any) => handleClick(e)}
                        onOpenChange={(e: any) => onOpenChange(e)}
                        mode="inline"
                    >
                        {/* <Suspense fallback={<div>加载中...</div>}> */}
                        {renderMenu(menus)}
                        {/* </Suspense> */}
                    </Menu>
                </div>
            </div>
            <div className="layout-content">
                <Header />
                <div className="layout-content-main">{renderRoutes(menus, token, props)}</div>
            </div>
        </div>
    );
};

export default memo(DefaultLayout);
