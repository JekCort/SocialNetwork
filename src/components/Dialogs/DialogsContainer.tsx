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
import {EmptyObject} from "redux";
import {Dialogs} from "./Dialogs";
import {StoreContext} from '../../StoreContext';
import {store} from '../../redax/redux-store';


// export type DialogsType = {
//     store: Store<EmptyObject & { profilePage: profilePagePropsType, dialogsPage: dialogsPagePropsType }, ActionsType>
// }

export const DialogsContainer = () => {


    // const onClickMessage = () => {
    //     props.store.dispatch(sendMessageCreator())
    // }
    //
    // const onChangeNewMessage = (body:string) => {
    //     props.store.dispatch(updateNewMessageBodyCreator(body))
    // }

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                const onClickMessage = () => {
                    store.dispatch(sendMessageCreator())
                }

                const onChangeNewMessage = (body: string) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }
                return <Dialogs
                    updateNewMessageBody={onChangeNewMessage}
                    sendMessage={onClickMessage}
                    dialogsPage={store.getState().dialogsPage}/>
            }}
        </StoreContext.Consumer>
    );

};
