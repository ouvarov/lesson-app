import React from 'react';
import Post from './Post';
import ProfileInfo from './ProfileInfo';

const Profile: React.FunctionComponent = () => {
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
                <Post userIcon={userIcon} />
            </div>
        </div>
    );
};

export default Profile;
