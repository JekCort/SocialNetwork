import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

type dialogPropsType = {
    id: number,
    name: string
}
export type dialogsPropsType={
    dialogs: Array<dialogPropsType>
}

type messagePropsType = {
    id: number,
    message: string
}
export type messagesPropsType={
    messages: Array<messagePropsType>
}

type postPropsType = {
    id: number,
    message: string,
    likesCount: number
}
export type postsPropsType = {
    posts: Array<postPropsType>

}


const dialogs = [
    {id: 1, name: "Bob"},
    {id: 2, name: "Eva"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Viktor"},
    {id: 5, name: "Valera"}
]
const messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are a you"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Yo"}
]
const posts = [
    {id: 1, message: "Hi, how are you?", likesCount: 15},
    {id: 2, message: "It's my first post", likesCount: 7}
]

ReactDOM.render(
    <App posts = {posts} messages={messages} dialogs={dialogs}/>,
    document.getElementById('root')
);