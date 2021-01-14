import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { StateTypes } from '../../types';
import { setUsers } from '../../state/reducers/findUsersReducer';
import UsersItem from './UsersItem';

const FindUsers: React.FunctionComponent = () => {
    const users = useSelector((state: StateTypes) => state.findUsers.users);
    const dispatch = useDispatch();

    const onClickFindUsers = (): void => {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => dispatch(setUsers(response.data.items)));
    };

    return (
        <div className="users-wrap">
            {users.map(({ followed, name, status, location, id, photos }) => (
                <UsersItem
                    followed={followed}
                    name={name}
                    status={status}
                    location={location}
                    id={id}
                    photos={photos}
                />
            ))}
            <button onClick={onClickFindUsers}>Find users</button>
        </div>
    );
};

export default FindUsers;
