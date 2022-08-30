import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from './Message/Message';
import {
    ActionsType,
    dialogsPagePropsType,
    profilePagePropsType,
    storePropsType,
} from "../../redax/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redax/dialogs-reduser";
import {EmptyObject, Store} from "redux";


export type DialogsType = {
    store: Store<EmptyObject & { profilepage: profilePagePropsType, dialogspage: dialogsPagePropsType }, ActionsType>
}

export const Dialogs = (props: DialogsType) => {
    let state = props.store.getState().dialogspage

    const dialogsItems = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)


    const messagesElement = state.messages
        .map(m => <Message massage={m.message}/>)

    const newMessageBody = state.NewMessageBody

    const onClickHandler = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
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
