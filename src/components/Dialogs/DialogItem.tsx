import React from 'react';
import { NavLink } from 'react-router-dom';

type DialogItemProps = {
    name: string;
    id: number;
    userImage: string;
};

const DialogItem: React.FunctionComponent<DialogItemProps> = ({ name, id, userImage }) => {
    const path = `/dialogs/${id}`;

    return (
        <NavLink to={path} className="dialog__item" activeClassName="dialog__item--active">
            <img src={userImage} alt="user-logo" className="dialog__img" />
            {name}
        </NavLink>
    );
};

export default DialogItem;
