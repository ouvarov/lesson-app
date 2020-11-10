import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Aside from './Aside/';
import Profile from './Profile';
import Dialogs from './Dialogs';
import News from './News';
import Settings from './Settings';
import Music from './Music';

const Body: React.FunctionComponent = () => (
    <BrowserRouter>
        <div className="body">
            <Header />
            <Aside />
            <div className="content">
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/dialogs">
                    <Dialogs />
                </Route>
                <Route path="/news">
                    <News />
                </Route>
                <Route path="/music">
                    <Music />
                </Route>
                <Route path="/settings">
                    <Settings />
                </Route>
            </div>
        </div>
    </BrowserRouter>
);

export default Body;
