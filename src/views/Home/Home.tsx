import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { sendConfigRequest } from '../../store/actions/config';
import { getConfig } from '../../store/selectors/config';
import { FetchFailTypes } from '../../store/types/config';

interface HomeProps { }

const Home: FC<HomeProps> = (props) => {
    const dispatch = useDispatch();
    const config: FetchFailTypes = useSelector(getConfig);

    useEffect(() => {
        dispatch(sendConfigRequest());
    }, [])

    // useEffect(() => {
    //     console.log(config.data);
    // }, [config])
    return (
        <div className="home">
            {config.status === 'padding' ? <h1>加载中...</h1> : <div>{
                config?.data?.map((item: any) => (
                    <h1 key={item.user_id}>{item.user_name}：工资 {item.user_salary}</h1>
                ))
            }</div>}
        </div>
    );
};

export default Home;