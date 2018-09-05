import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import sagas from './sagas';

import App from './App';
// import CapsuleApp from './CapsuleApp';
import ChatAppStore from './ChatAppStore';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(ChatAppStore, {
    screen : ''
}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

ReactDOM.render((<Provider store={store}>
    <App />
</Provider>), document.getElementById('root'));