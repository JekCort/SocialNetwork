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
import {Dialogs} from "./Dialogs";


export type DialogsType = {
    store: Store<EmptyObject & { profilePage: profilePagePropsType, dialogsPage: dialogsPagePropsType }, ActionsType>
}

export const DialogsContainer = (props: DialogsType) => {
    let state = props.store.getState().dialogsPage

    const onClickMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const onChangeNewMessage = (body:string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
      <Dialogs updateNewMessageBody={onChangeNewMessage} sendMessage={onClickMessage} dialogsPage={state}/>
    );
};
