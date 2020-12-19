import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './state/redaxStore';

const renderEntireTree = (state: any): void => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} store={store} />
        </React.StrictMode>,
        document.getElementById('root'),
    );
};

renderEntireTree(store.getState());
store.subscribe(() => renderEntireTree(store.getState()));
reportWebVitals();
