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
        case 'UPDATE_NEW_MESSAGE_BODY':{
            const stateCopy = {...state}

            stateCopy.NewMessageBody = action.body
            return stateCopy
        }

        case 'SEND_MESSAGE':{
            const stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            const body = stateCopy.NewMessageBody
            stateCopy.NewMessageBody = ''
            stateCopy.messages.push({id: 6, message: body})
            return stateCopy
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