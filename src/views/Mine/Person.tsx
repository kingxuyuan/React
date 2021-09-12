import { FC } from 'react';

interface PersonProps {

}

const Person: FC<PersonProps> = (props) => {
    return (
        <div className="person">
            <h1>个人中心</h1>
        </div>
    );
}

export default Person;