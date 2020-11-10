import React from 'react';

type MessageItemProps = {
    message: string,
    likeCounter: number,
    userIcon: string,
};

const PostItem: React.FunctionComponent<MessageItemProps> = ({ message, likeCounter, userIcon }) => (
    <div className="message-item">
        <div className="message-item__user-icon-wrap">
            <img src={userIcon} alt="user-icon" className="message-item__user-icon" />
        </div>
        <div className="message-item__text">{message}</div>
        <div className="message-item__like">{likeCounter}</div>
    </div>
);

export default PostItem;
