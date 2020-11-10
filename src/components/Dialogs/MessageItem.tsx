import React from 'react';

type MessageItemProps = {
    message: string,
    id: number,
};

const MessageItem: React.FunctionComponent<MessageItemProps> = ({ message }) => (
    <p className="dialog__message">{message}</p>
);

export default MessageItem;
