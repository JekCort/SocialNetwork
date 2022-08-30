import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from './Message/Message';
import {dialogsPagePropsType} from "../../redax/store";



export type DialogsType = {
    updateNewMessageBody:(body:string) => void
    sendMessage:() => void
    dialogsPage:dialogsPagePropsType
}

export const Dialogs = (props: DialogsType) => {
    const state = props.dialogsPage

    const dialogsItems = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)


    const messagesElement = state.messages
        .map(m => <Message massage={m.message}/>)

    const newMessageBody = state.NewMessageBody

    const onClickHandler = () => {
        props.sendMessage()
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItem}>
                {dialogsItems}
            </div>
            <div className={classes.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onChangeHandler}
                            placeholder='Enter your message'>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onClickHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
