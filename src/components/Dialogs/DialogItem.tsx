// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';

type DialogItemProps = {
    name: string,
    id: number,
};

const DialogItem: React.FunctionComponent<DialogItemProps> = ({ name, id }) => {
    const path = `/dialogs/${id}`;

    return (
        <NavLink to={path} className="dialog__item" activeClassName="dialog__item--active">
            {name}
        </NavLink>
    );
};

export default DialogItem;
