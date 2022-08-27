import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {statePropsType, store, storePropsType} from "./redax/state";
import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree = (state:statePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}  dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>,
        document.getElementById('root')

    );
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
