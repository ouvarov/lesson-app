import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DialogItem from './DialogItem';
import MessageItem from './MessageItem';
import { MessageItemType, StateTypes } from '../../types';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../state';

const Dialogs: React.FunctionComponent = () => {
    const dialogsPage = useSelector((state: StateTypes) => state.dialogsPage);
    const dispatch = useDispatch();

    const onClick = (): void => {
        dispatch(addMessageActionCreator());
    };
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        dispatch(updateMessageTextActionCreator(e.target.value));
    };

    return (
        <div className="dialog">
            <div className="dialog__list">
                {dialogsPage.dialogs.map(({ name, id, userIcon }) => (
                    <DialogItem name={name} id={id} key={id} userImage={userIcon} />
                ))}
            </div>
            <div className="dialog__message-wrap">
                <div className="dialog__item-wrap">
                    {dialogsPage.messages.messageItem.map((item: MessageItemType) => (
                        <MessageItem message={item.message} id={item.id} key={item.id} />
                    ))}
                </div>
                <div className="dialog__footer">
                    <textarea onChange={onChange} value={dialogsPage.messages.newMessageText} />
                    <button className="button" type="button" onClick={onClick}>
                        Add Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
