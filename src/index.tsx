import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state, statePropsType, subscribe, updateNewPostText} from "./redax/state";
import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree = (state:statePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')

    );
}
rerenderEntireTree(state);
subscribe(rerenderEntireTree)