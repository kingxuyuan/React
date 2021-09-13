import { FC } from 'react';
import { Result, Button } from 'antd';
import { useHistory } from 'react-router';

interface NotFoundProps {

}

const NotFound: FC<NotFoundProps> = (props) => {
    const history = useHistory();
    const backHome = () => {
        history.replace('/');
    }
    return (
        <div className="notfound">
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" onClick={() => backHome()}>Back Home</Button>}
            />,
        </div>
    );
}

export default NotFound;