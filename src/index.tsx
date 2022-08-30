import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from "./redax/redux-store";
import {BrowserRouter} from "react-router-dom";
import {statePropsType} from "./redax/store";
import {DialogsType} from "./components/Dialogs/Dialogs";



const rerenderEntireTree = (state:any) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state}  dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>,
        document.getElementById('root')

    );
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
    const state = store.getState()
    rerenderEntireTree(state)
})
