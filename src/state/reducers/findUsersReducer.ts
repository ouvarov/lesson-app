import { ACTIVE_TYPE } from './consts';
import { FindUsersTypes } from '../../types';

const findUsersReducer = (state: any = { users: [], pageCounter: 1 }, action: any) => {
    switch (action.type) {
        case ACTIVE_TYPE.FOLLOW:
            return {
                ...state,
                users: state.users.map((u: FindUsersTypes) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true };
                    }
                    return u;
                }),
            };
        case ACTIVE_TYPE.UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: FindUsersTypes) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false };
                    }
                    return u;
                }),
            };
        case ACTIVE_TYPE.SET_USER:
            return { ...state, users: [...action.users] };
        case ACTIVE_TYPE.SET_PAGE:
            return { ...state, pageCounter: action.pageCounter };
        default:
            return state;
    }
};

export const follow = (userId: number) => ({ type: ACTIVE_TYPE.FOLLOW, userId });
export const unFollow = (userId: number) => ({ type: ACTIVE_TYPE.UNFOLLOW, userId });
export const setUsers = (users: any) => ({ type: ACTIVE_TYPE.SET_USER, users });
export const setPage = (pageCounter: number) => ({ type: ACTIVE_TYPE.SET_PAGE, pageCounter });

export default findUsersReducer;
