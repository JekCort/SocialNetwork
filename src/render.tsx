import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, statePropsType} from "./redax/state";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = (state:statePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')

    );
}


