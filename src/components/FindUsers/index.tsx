import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { StateTypes } from '../../types';
import { setUsers } from '../../state/reducers/findUsersReducer';
import UsersItem from './UsersItem';
import Pagination from '../Pagination';
import Loading from '../Loading';

const FindUsers: React.FunctionComponent = () => {
    const users = useSelector((state: StateTypes) => state.findUsers.users);
    const dispatch = useDispatch();
    const [totalCount, setTotalCount] = useState(0);
    const [loading, setLoading] = useState(false);

    const getUsers = (page: number) => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`)
            .then(response => {
                dispatch(setUsers(response.data.items));
                setTotalCount(response.data.totalCount);
            })
            .then(() => {
                setLoading(true);
            });
    };

    return (
        <div className="users-wrap">
            {!loading && !users.length && <Loading />}
            {users.map(({ followed, name, status, id, photos }) => (
                <UsersItem followed={followed} name={name} status={status} id={id} photos={photos} />
            ))}
            <Pagination getUser={getUsers} pages={totalCount / 10} />
        </div>
    );
};

export default FindUsers;
