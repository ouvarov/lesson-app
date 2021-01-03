import React from 'react';
import { updateCounterLikeActionCreator } from '../../../state';
import { useDispatch } from 'react-redux';

type MessageItemProps = {
    message: string;
    likeCounter: number;
    userIcon: string;
    id: number;
};

const PostItem: React.FunctionComponent<MessageItemProps> = ({ message, likeCounter, userIcon, id }) => {
    const dispatch = useDispatch();

    const onClickLike = () => {
        dispatch(updateCounterLikeActionCreator(id));
    };

    return (
        <div className="message-item">
            <div className="message-item__user-icon-wrap">
                <img src={userIcon} alt="user-icon" className="message-item__user-icon" />
            </div>
            <div className="message-item__text">{message}</div>
            <button onClick={onClickLike} className="message-item__like">
                {likeCounter}
            </button>
        </div>
    );
};

export default PostItem;
