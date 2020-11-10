import React from 'react';
import { NavLink } from 'react-router-dom';

const Aside: React.FunctionComponent = () => (
    <aside className="aside">
        <nav className="aside__nav">
            <NavLink to="/profile" activeClassName="aside__link--active" className="aside__link">
                Profile
            </NavLink>
            <NavLink to="/dialogs" activeClassName="aside__link--active" className="aside__link">
                Messages
            </NavLink>
            <NavLink to="/news" activeClassName="aside__link--active" className="aside__link">
                News
            </NavLink>
            <NavLink to="/music" activeClassName="aside__link--active" className="aside__link">
                Music
            </NavLink>
            <NavLink to="/settings" activeClassName="aside__link--active" className="aside__link">
                Settings
            </NavLink>
        </nav>
    </aside>
);

export default Aside;
