import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateTypes } from '../../types';
import { setUsers } from '../../state/reducers/findUsersReducer';

const FindUsers: React.FunctionComponent = () => {
    const users = useSelector((state: StateTypes) => state.findUsers.users);
    const dispatch = useDispatch();

    const onClick = (): any => {
        console.log(users, users.length >= 0);
        dispatch(
            setUsers([
                {
                    id: 2,
                    followed: false,
                    fullName: 'valera',
                    status: 'fdfddfd',
                    location: { city: 'fdfdf', country: 'fdfd' },
                },
                {
                    id: 3,
                    followed: true,
                    fullName: 'valera1',
                    status: 'jjjjj',
                    location: { city: 'kkkk', country: 'dgfdl' },
                },
            ]),
        );
    };

    const render = (): any => {
        if (users.length >= 0) {
            return users.map(({ followed, fullName, status, location, id }) => (
                <div>
                    <div>{fullName}</div>
                    <div>{status}</div>
                    <div>
                        <span>{location.city}</span>
                        <span>{location.country}</span>
                    </div>
                    <button onClick={() => id}>{followed ? 'false' : 'true'}</button>
                </div>
            ));
        }
        return 'fdd';
    };

    return (
        <div>
            {render()}
            <button onClick={onClick}>Find users</button>
        </div>
    );
};

export default FindUsers;
