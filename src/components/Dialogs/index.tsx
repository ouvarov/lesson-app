import React from 'react';
import DialogItem from './DialogItem';
import MessageItem from './MessageItem';
import { DialogsPageType } from '../../types';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../state';

type DialogsProps = {
    dialogsPage: DialogsPageType;
    store: any;
};

const Dialogs: React.FunctionComponent<DialogsProps> = ({ dialogsPage, store }) => {
    const onClick = (): void => {
        store.dispatch(addMessageActionCreator());
    };
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        store.dispatch(updateMessageTextActionCreator(e.target.value));
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
                    {dialogsPage.messages.messageItem.map((item: any) => (
                        <MessageItem message={item.message} id={item.id} />
                    ))}
                </div>
                <div className="dialog__footer">
                    <textarea onChange={onChange} value={dialogsPage.messages.newMessageText} />
                    <button className="button" type="button" onClick={onClick}>
                        add Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
