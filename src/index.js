import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './index.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import {
    mylogger
} from './middleware'

const store = createStore(reducers, {}, applyMiddleware(mylogger))
store.subscribe(() => {
    console.log("Update Store: ", store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));