import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostItem from './PostItem';
import { StateTypes } from '../../../types';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../state';

const Post: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const post = useSelector((state: StateTypes) => state.profile.post);
    const value = useSelector((state: StateTypes) => state.profile.newPostText);

    const onClick = (): void => {
        dispatch(addPostActionCreator());
    };

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        dispatch(updatePostTextActionCreator(e.target.value));
    };

    return (
        <div className="message">
            <h2 className="message__title">My posts</h2>
            <textarea className="message__textarea" onChange={onChange} value={value} />
            <button className="message__button button" onClick={onClick}>
                send
            </button>
            {post.map(({ userIcon, likeCounter, message, id }) => (
                <PostItem userIcon={userIcon} message={message} likeCounter={likeCounter} id={id} key={id} />
            ))}
        </div>
    );
};

export default Post;
