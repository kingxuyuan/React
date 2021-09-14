import { FC, memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, RouteComponentProps, useHistory } from 'react-router-dom';

import './index.scss';
import { getToken } from '../../store/actions/token';
import { mainRouter, RouteTypes } from '../../router/router';
import renderRouter from '../../router/renderRouter';
import Siderbar from '../../components/Siderbar/Slider';
import Navbar from '../../components/Navbar/Navbar';

interface LayoutProps extends RouteComponentProps { }

const flatFn = (arr: RouteTypes[]): any[]=> {
    return arr.map((item: RouteTypes) => {
        if (item.children) {
            return flatFn(item.children);
        }
        return item.path
    }).flat(Infinity)
}

const Layout: FC<LayoutProps> = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const is404 = flatFn(mainRouter).some(item => item === props.location.pathname);
    const [foldWidth, setFoldWidth] = useState(210);
    const [isFold, setIsFold] = useState(false);
    
    useEffect(() => {
        !is404 && history.replace('/404');
    }, [])

    useEffect(() => {
        dispatch(getToken());
    })
    
    return (
        <div className="layout">
            <div className="layout-slider" style={{ width: foldWidth }}>
                <div className="layout-slider-top">
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="" />
                    <h1 style={{ display: isFold ? 'none' : 'block' }}>React 后台管理系统</h1>
                </div>
                <Siderbar {...props} foldWidth={foldWidth} isFold={isFold} />
            </div>
            <div className="layout-section" style={{ marginLeft: foldWidth }}>
                <Navbar {...props} setFoldWidth={setFoldWidth} isFold={isFold} setIsFold={setIsFold} />
                <div className="layout-main">
                    <Switch>{renderRouter(mainRouter)}</Switch>
                </div>
            </div>
        </div>
    );
}

export default memo(Layout);