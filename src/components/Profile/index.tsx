import React from 'react';
import Post from './Post';
import ProfileInfo from './ProfileInfo';
import { StateTypes } from '../../types';

type ProfileProps = {
    state: StateTypes;
    store: any;
};

const Profile: React.FunctionComponent<ProfileProps> = ({ state, store }) => {
    const userIcon = 'https://avatanplus.com/files/resources/mid/577e5d9f81e85155c59db72c.png';

    return (
        <div className="profile">
            <div className="profile__wrap">
                <ProfileInfo
                    userIcon={userIcon}
                    userName="Валера"
                    wallpaperIcon="https://upload.wikimedia.org/wikipedia/ru/thumb/4/42/Simpsons_cast.jpg/700px-Simpsons_cast.jpg"
                    bio="bio"
                />
                <Post store={store} post={state.profile.post} value={state.profile.newPostText} />
            </div>
        </div>
    );
};

export default Profile;
