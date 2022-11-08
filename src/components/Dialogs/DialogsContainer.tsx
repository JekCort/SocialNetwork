import React from 'react';

import {initialStateType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redax/dialogs-reduser";

import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import { Dispatch } from 'redux';



type mapStateToPropsType = {
    dialogsPage: initialStateType
}

type mapDispatchToPropsType ={
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}




    let mapStateToProps = (state: AppStateType):mapStateToPropsType => {
        return {
            dialogsPage: state.dialogsPage
        }
    }

    let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
        return {
            updateNewMessageBody: (body: string) => {
                dispatch(updateNewMessageBodyCreator(body))
            },
            sendMessage: () => {
                dispatch(sendMessageCreator())
            }
        }
    }

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
