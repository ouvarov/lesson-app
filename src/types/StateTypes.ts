import { ProfileType, DialogsPageType, FindUsersTypes } from './';

export type StateTypes = {
    profile: ProfileType;
    dialogsPage: DialogsPageType;
    findUsers: {
        users: FindUsersTypes[];
    };
};
