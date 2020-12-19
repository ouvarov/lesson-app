import { DialogsPageType } from '../../types';
import store from '..';
import { ACTIVE_TYPE } from './consts';

const dialogsReducer = (state: DialogsPageType = store._state.dialogsPage, action: any) => {
    switch (action.type) {
        case ACTIVE_TYPE.ADD_MESSAGE: {
            const newMessages = {
                id: state.messages.messageItem.length + 1,
                message: state.messages.newMessageText,
            };

            if (state.messages.newMessageText.length > 0) {
                state.messages.messageItem.push(newMessages);
                // eslint-disable-next-line no-param-reassign
                state.messages.newMessageText = '';
            }
            break;
        }
        case ACTIVE_TYPE.UPDATE_MESSAGE_TEXT:
            // eslint-disable-next-line no-param-reassign
            state.messages.newMessageText = action.newText;
            break;
        default:
            return state;
    }
    return state;
};

export default dialogsReducer;
