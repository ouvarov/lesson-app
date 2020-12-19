import React from 'react';
import PostItem from './PostItem';
import { PostTypes } from '../../../types';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../state';

type PostProps = {
    post: PostTypes[];
    value: string;
    store: any;
};

const Post: React.FunctionComponent<PostProps> = ({ post, value, store }) => {
    const onClick = (): void => {
        store.dispatch(addPostActionCreator());
    };

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        store.dispatch(updatePostTextActionCreator(e.target.value));
    };

    return (
        <div className="message">
            <h2 className="message__title">My posts</h2>
            <textarea className="message__textarea" onChange={onChange} value={value} />
            <button className="message__button button" onClick={onClick}>
                send
            </button>
            {post.map(({ userIcon, likeCounter, message, id }) => (
                <PostItem
                    store={store}
                    userIcon={userIcon}
                    message={message}
                    likeCounter={likeCounter}
                    id={id}
                    key={id}
                />
            ))}
        </div>
    );
};

export default Post;
