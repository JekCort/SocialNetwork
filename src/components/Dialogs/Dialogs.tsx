import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import { Message } from './Message/Message';


export const Dialogs = () => {
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

    const dialogsItems = dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)


    const messagesElement = messages
        .map(m => <Message massage={m.message}/>)

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItem}>
                {dialogsItems}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div>
    );
};
