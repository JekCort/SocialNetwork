import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Dialogs.module.css';

type DialogItemPropsType = {
    name: string
    id: number
}
export const DialogItem = (props: DialogItemPropsType) => {
    const path = "/Dialogs/" + props.id
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


type MessagePropsType = {
    massage: string
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={classes.massage}>{props.massage}</div>
    )
}

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
