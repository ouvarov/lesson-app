import React from 'react';
import { useDispatch } from 'react-redux';
import { follow, unFollow } from '../../state/reducers/findUsersReducer';

type UsersItemProps = {
    followed: boolean;
    name: string;
    status: string;
    photos: {
        large: string;
        small: string;
    };
    id: number;
};

const UsersItem: React.FunctionComponent<UsersItemProps> = ({ followed, name, status, id, photos }) => {
    const dispatch = useDispatch();
    const onClickUnFollow = (userId: number): void => {
        dispatch(unFollow(userId));
    };
    const onClickFollow = (userId: number): void => {
        dispatch(follow(userId));
    };

    return (
        <div className="user-item">
            <figure className="user-item__icon-wrap">
                {photos.large || photos.small ? (
                    <img className="user-item__icon" src={photos.large ? photos.large : photos.small} alt="userIcon" />
                ) : (
                    'net photo'
                )}
            </figure>
            <div className="user-item__name">{name}</div>
            <div className="user-item__status">{status}</div>
            {followed ? (
                <button
                    className="button"
                    onClick={() => {
                        onClickUnFollow(id);
                    }}
                >
                    follow
                </button>
            ) : (
                <button
                    className="button"
                    onClick={() => {
                        onClickFollow(id);
                    }}
                >
                    unfollow
                </button>
            )}
        </div>
    );
};

export default UsersItem;
