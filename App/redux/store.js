import { createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger'; // JUST FOR DEBUG - REMOVE IN PRODUCTION
import { createPromise } from 'redux-promise-middleware';

const promise = createPromise({
    types: {
        pending: 'waiting',
        fulfilled: 'success',
    },
});

const store = createStore(rootReducer, applyMiddleware(promise, logger, thunk));

store.subscribe(() => {
    console.log('Hello from redux/store.js');
});

export default store;
