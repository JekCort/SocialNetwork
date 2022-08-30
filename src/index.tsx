import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from "./redax/redux-store";
import {BrowserRouter} from "react-router-dom";





const rerenderEntireTree = (state:any) => {

    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root')

    );
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
    const state = store.getState()
    rerenderEntireTree(state)
})