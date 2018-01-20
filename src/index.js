import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from "redux-promise-middleware";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise';
// import {createLogger} from 'redux-logger';
import allReducers from './reducers';
import App from './App';

// const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(promiseMiddleware())
);

ReactDOM.render(
    <MuiThemeProvider>
    <Provider store={store}>    
        <BrowserRouter>
            <App />
        </BrowserRouter>        
    </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);

export default store;
