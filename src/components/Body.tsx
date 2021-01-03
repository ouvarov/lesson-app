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
                <Route path="/profile" render={() => <Profile />} />
                <Route path="/dialogs" render={() => <Dialogs />} />
                <Route path="/news" render={() => <News />} />
                <Route path="/music" render={() => <Music />} />
                <Route path="/settings" render={() => <Settings />} />
            </div>
        </div>
    </BrowserRouter>
);

export default Body;
