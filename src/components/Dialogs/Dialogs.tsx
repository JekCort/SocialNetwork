import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import { Message } from './Message/Message';
import {dialogsPropsType, messagesPropsType} from "../../index";


export const Dialogs = (props:dialogsPropsType & messagesPropsType) => {

    const dialogsItems = props.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)


    const messagesElement = props.messages
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
