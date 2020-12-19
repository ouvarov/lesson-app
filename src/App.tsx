import React from 'react';
import './App.sass';
import Body from './components/Body';
import { StateTypes } from './types';

type AppProps = {
    state: StateTypes;
    store: any;
};

const App: React.FunctionComponent<AppProps> = ({ state, store }) => (
    <div className="App">
        <Body state={state} store={store} />
    </div>
);

export default App;
