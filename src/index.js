import React from 'react';
import ReactDOM from 'react-dom';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from './App.js';

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);