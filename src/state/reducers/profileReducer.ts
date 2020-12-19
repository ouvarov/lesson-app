import { ProfileType } from '../../types';
import store from '..';
import { ACTIVE_TYPE } from './consts';

const profileReducer = (state: ProfileType = store._state.profile, action: any) => {
    switch (action.type) {
        case ACTIVE_TYPE.ADD_POST: {
            const newPost = {
                id: state.post.length + 1,
                userIcon: 'https://avatanplus.com/files/resources/mid/577e5d9f81e85155c59db72c.png',
                message: state.newPostText,
                likeCounter: 0,
            };

            if (state.newPostText.length > 0) {
                state.post.push(newPost);
                // eslint-disable-next-line no-param-reassign
                state.newPostText = '';
            }
            break;
        }
        case ACTIVE_TYPE.UPDATE_POST_TEXT:
            // eslint-disable-next-line no-param-reassign
            state.newPostText = action.newText;
            break;
        case ACTIVE_TYPE.UPDATE_COUNTER_LIKE:
            // eslint-disable-next-line no-param-reassign
            state.post[action.idPost - 1].likeCounter = state.post[action.idPost - 1].likeCounter + 1;
            break;
        default:
            return state;
    }
    return state;
};

export default profileReducer;
