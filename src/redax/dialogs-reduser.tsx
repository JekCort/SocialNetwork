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
            state.NewMessageBody = action.body
            return state
        case 'SEND_MESSAGE':
            const body = state.NewMessageBody
            state.NewMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state
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