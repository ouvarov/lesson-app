import React from 'react';

type ProfileInfoProps = {
    userName: string,
    bio: string,
    userIcon: string,
    wallpaperIcon: string,
};

const ProfileInfo: React.FunctionComponent<ProfileInfoProps> = ({ userName, bio, userIcon, wallpaperIcon }) => (
    <div className="profile__info-wrap">
        <figure className="profile__wallpaper">
            <img src={wallpaperIcon} alt="wallpaper" className="profile__icon" />
        </figure>
        <div className="profile__icon-wrap">
            <img src={userIcon} alt="user" className="profile__user-icon" />
        </div>
        <div className="profile__user-info-wrap">
            <h2 className="profile__user-name">{userName}</h2>
            <div className="profile__bio">{bio}</div>
        </div>
    </div>
);

export default ProfileInfo;
