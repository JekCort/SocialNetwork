import {
    ActionsType, dialogPropsType,
    messagePropsType,
    NewMessageBodyType,
    SendMessageType,

} from "./store";
const initialState: initialStateType = {
    messages: [],
    dialogs: [],
    NewMessageBody: ''
}

export type initialStateType = {
    messages: Array<messagePropsType>
    dialogs: Array<dialogPropsType>
    NewMessageBody: string
}

export const dialogsReduser = (state = initialState, action: ActionsType): initialStateType => {

    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            return {
                ...state,
                NewMessageBody : action.body
            }

        case 'SEND_MESSAGE':
            let body = state.NewMessageBody
            return{
                ...state,
                NewMessageBody : '',
                messages: [...state.messages, {id: 6, message: body}]
            }

        default:
            return state
    }

}

export const sendMessageCreator = (): SendMessageType => {
    return {
        type: 'SEND_MESSAGE'
    }
};

export const updateNewMessageBodyCreator = (body: string): NewMessageBodyType => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY', body: body
    }
};