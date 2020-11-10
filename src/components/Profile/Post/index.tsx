import React from 'react';
import PostItem from './PostItem';

type PostProps = {
    userIcon: string,
};

const Post: React.FunctionComponent<PostProps> = ({ userIcon }) => (
    <div className="message">
        <h2 className="message__title">My posts</h2>
        <textarea className="message__textarea" />
        <button className="message__button button">send</button>

        <PostItem userIcon={userIcon} message="hi" likeCounter={1} />
        <PostItem userIcon={userIcon} message="how are you?" likeCounter={5} />
    </div>
);

export default Post;
