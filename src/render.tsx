import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, statePropsType, updateNewPostText} from "./redax/state";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = (state:statePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')

    );
}


