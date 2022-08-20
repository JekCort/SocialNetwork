import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import { Message } from './Message/Message';
import {dialogsPagePropsType} from "../../redax/state";


type DialogsType = {
    state:dialogsPagePropsType
}

export const Dialogs = ({state}: DialogsType) => {

    const dialogsItems = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)


    const messagesElement = state.messages
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
