import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import store from './Redux/state';


let rerenderEntireTree = (store) => {

    ReactDOM.render(
            <BrowserRouter>
                <App store={store} />
            </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store);

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
