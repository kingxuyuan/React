import { FC } from 'react';
import { Spin, Space } from 'antd';

import './index.scss';

interface LoadingProps {

}

const Loading: FC<LoadingProps> = (props) => {
    return (
        <div className="loading">
            <Space size="middle">
                <Spin size="large" />
            </Space>
        </div>
    );
}

export default Loading;