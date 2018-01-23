import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from "redux-promise-middleware";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import userReducer from './reducers/user'


const store = createStore(userReducer, applyMiddleware(promiseMiddleware()))

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
