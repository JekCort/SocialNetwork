import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {statePropsType, store, storePropsType} from "./redax/state";
import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree = (state:statePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')

    );
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
