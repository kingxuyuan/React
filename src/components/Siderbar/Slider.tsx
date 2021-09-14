import { FC, memo, useEffect, useState } from 'react';
import { Menu } from 'antd';
import { Link, RouteComponentProps } from 'react-router-dom';
import { mainRouter, RouteTypes } from '../../router/router';

import './index.scss';

const { SubMenu } = Menu;

interface SiderbarProps extends RouteComponentProps {
    isFold: boolean
    foldWidth: number
}

const renderMenu = (arr: RouteTypes[]) => {
    return arr.map((item: RouteTypes) => {
        if (item.children) {
            return (
                <SubMenu key={item.path} title={item.title} icon={item.icon}>
                    {renderMenu(item.children)}
                </SubMenu>
            )
        }

        return (
            <Menu.Item key={item.path} title={item.title} icon={item.icon}>
                <Link to={item.path}>{item.title}</Link>
            </Menu.Item>
        )
    })
}

const Siderbar: FC<SiderbarProps> = (props) => {
    const oldOpenKey = mainRouter.map(item => item.path).filter(item => props.location.pathname.includes(item))
    const [openKey, setOpenKey] = useState(oldOpenKey);
    const [selectedKey, setSelectedKey] = useState([props.location.pathname]);
    const { isFold, foldWidth } = props;

    const openChange = (keys: any) => {
        setOpenKey(keys)
    }
    const handleClick = (e: any) => {
        setSelectedKey(e.key)
    }


    useEffect(() => {
        setOpenKey(oldOpenKey);
        setSelectedKey([props.location.pathname]);
    }, [props.location.pathname])


    return (
        <div className="sider-menu">
            <Menu
                mode="inline"
                theme="dark"
                style={{ width: foldWidth }}
                inlineCollapsed={isFold}
                openKeys={openKey}
                selectedKeys={selectedKey}
                onClick={(e: any) => handleClick(e)}
                onOpenChange={(e: any) => openChange(e)}
            >
                {renderMenu(mainRouter)}
            </Menu>
        </div>
    );
}

export default memo(Siderbar);