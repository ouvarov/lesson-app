import { ACTIVE_TYPE } from './consts';

const findUsersReducer = (state: any = { users: [] }, action: any) => {
    switch (action.type) {
        case ACTIVE_TYPE.FOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true };
                    }
                    return u;
                }),
            };
        case ACTIVE_TYPE.UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false };
                    }
                    return u;
                }),
            };
        case ACTIVE_TYPE.SET_USER:
            return { ...state, users: [...state.users, ...action.users] };
        default:
            return state;
    }
};

export const follow = (userId: number) => ({ type: 'FOLLOW', userId });
export const unFollow = (userId: number) => ({ type: 'FOLLOW', userId });
export const setUsers = (users: any) => ({ type: 'SET_USER', users });

export default findUsersReducer;
