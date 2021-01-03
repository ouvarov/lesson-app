import { dialogsReducer, profileReducer } from './reducers';
import { ACTIVE_TYPE } from './reducers/consts';

const store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Валера',
                    userIcon:
                        'https://i.ytimg.com/vi/RCX2OwrGzqs/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB49W60XXIAFeuE27afvVN6NUVrSw',
                },
                {
                    id: 2,
                    name: 'Миша',
                    userIcon:
                        'https://i.ytimg.com/vi/RCX2OwrGzqs/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB49W60XXIAFeuE27afvVN6NUVrSw',
                },
                {
                    id: 3,
                    name: 'Петя',
                    userIcon:
                        'https://i.ytimg.com/vi/RCX2OwrGzqs/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB49W60XXIAFeuE27afvVN6NUVrSw',
                },
                {
                    id: 4,
                    name: 'Валентин',
                    userIcon:
                        'https://i.ytimg.com/vi/RCX2OwrGzqs/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB49W60XXIAFeuE27afvVN6NUVrSw',
                },
                {
                    id: 5,
                    name: 'Коля',
                    userIcon:
                        'https://i.ytimg.com/vi/RCX2OwrGzqs/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB49W60XXIAFeuE27afvVN6NUVrSw',
                },
            ],
            messages: {
                messageItem: [
                    { id: 1, message: 'hi' },
                    { id: 2, message: 'how are you' },
                    { id: 3, message: 'valera' },
                ],
                newMessageText: '',
            },
        },
        profile: {
            post: [
                {
                    id: 1,
                    userIcon: 'https://avatanplus.com/files/resources/mid/577e5d9f81e85155c59db72c.png',
                    message: 'hi',
                    likeCounter: 1,
                },
                {
                    id: 2,
                    userIcon: 'https://avatanplus.com/files/resources/mid/577e5d9f81e85155c59db72c.png',
                    message: 'how are you?',
                    likeCounter: 10,
                },
                {
                    id: 3,
                    userIcon: 'https://avatanplus.com/files/resources/mid/577e5d9f81e85155c59db72c.png',
                    message: 'valera',
                    likeCounter: 3,
                },
                {
                    id: 4,
                    userIcon: 'https://avatanplus.com/files/resources/mid/577e5d9f81e85155c59db72c.png',
                    message: 'Petro',
                    likeCounter: 5,
                },
            ],
            newPostText: '',
        },
    },
    renderEntireTree() {
        console.log('');
    },
    getState() {
        return this._state;
    },
    subscribe(observer: any) {
        this.renderEntireTree = observer;
    },
    onClickLikeCounter(id: number): void {
        this._state.profile.post[id - 1].likeCounter = this._state.profile.post[id - 1].likeCounter + 1;
        this.renderEntireTree();
    },
    dispatch(action: any) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profile = profileReducer(this._state.profile, action);

        this.renderEntireTree();
    },
};

export const addMessageActionCreator = () => ({ type: ACTIVE_TYPE.ADD_MESSAGE });

export const addPostActionCreator = () => ({ type: ACTIVE_TYPE.ADD_POST });

export const updateCounterLikeActionCreator = (id: number) => ({ type: ACTIVE_TYPE.UPDATE_COUNTER_LIKE, idPost: id });
export const updatePostTextActionCreator = (text: string): any => ({
    type: ACTIVE_TYPE.UPDATE_POST_TEXT,
    newText: text,
});
export const updateMessageTextActionCreator = (text: string): any => ({
    type: ACTIVE_TYPE.UPDATE_MESSAGE_TEXT,
    newText: text,
});

export default store;
