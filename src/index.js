import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import logger from 'redux-logger';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


const feelingsReducer = (state = [], action) => {
    if( action.type === 'FEELINGS'){
        console.log('no feelings. btw this is action:', action.payload)
        return action.payload
    }
    return state
}

const understandingReducer = (state = [], action) => {
    if( action.type === 'UNDERSTANDING'){
        console.log('In undertanding. action:', action.payload)
        return action.payload
    }
    return state
}

const supportReducer = (state = [], action) => {
    if( action.type === 'SUPPORT'){
        console.log('In support. action:', action.payload)
        return action.payload
    }
    return state
}

const commentsReducer = (state = [], action) => {
    if( action.type === 'COMMENTS'){
        console.log('In comments. action:', action.payload)
        return action.payload
    }
    return state
}
const store = createStore(
    combineReducers({
        feelingsReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
    }),
    applyMiddleware(logger)
)



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
