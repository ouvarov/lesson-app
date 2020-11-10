import React from 'react';
import DialogItem from './DialogItem';
import MessageItem from './MessageItem';

const Dialogs: React.FunctionComponent = () => {
    const dialogs = [
        { id: 1, name: 'Валера' },
        { id: 3, name: 'Миша' },
        { id: 3, name: 'Петя' },
        { id: 4, name: 'Валентин' },
        { id: 5, name: 'Коля' },
    ];

    const message = [
        { id: 1, message: 'hi' },
        { id: 3, message: 'how are you' },
        { id: 3, message: 'valera' },
    ];

    return (
        <div className="dialog">
            <div className="dialog__list">
                {dialogs.map(userDialogItem => (
                    <DialogItem name={userDialogItem.name} id={userDialogItem.id} />
                ))}
            </div>
            <div className="dialog__message-wrap">
                {message.map(messageItem => (
                    <MessageItem message={messageItem.message} id={messageItem.id} />
                ))}
            </div>
        </div>
    );
};

export default Dialogs;
