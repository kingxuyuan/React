import { FC, Dispatch, SetStateAction } from 'react';

import './index.scss';
import { Breadcrumb } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import user from '../../assets/images/user.gif';

interface NavbarProps {
    isFold: boolean,
    setIsFold: Dispatch<SetStateAction<boolean>>
    setFoldWidth: Dispatch<SetStateAction<number>>
}

const Navbar: FC<NavbarProps> = (props) => {
    const { isFold, setIsFold, setFoldWidth } = props;

    const changeFold = () => {
        setIsFold(!isFold);
        setFoldWidth(isFold ? 210 : 54);
    }

    return (
        <div className="layout-navbar">
            <div className="layout-navbar-left">
                <div className="unfold" onClick={() => changeFold()}>
                    <MenuFoldOutlined />
                </div>
                <div className="breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            <div className="layout-navbar-right">
                <img src={user} alt="" />
            </div>
        </div>
    );
}

export default Navbar;