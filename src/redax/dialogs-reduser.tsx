import {ActionsType, dialogsPagePropsType, NewMessageBodyType, SendMessageType, statePropsType} from "./store";

const initialState: dialogsPagePropsType ={
  messages: [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are a you"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Yo"}
  ],
  dialogs: [
    {id: 1, name: "Bob"},
    {id: 2, name: "Eva"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Viktor"},
    {id: 5, name: "Nick"},
    {id: 6, name: "Valera"}
  ],
  NewMessageBody: ''
}

export const dialogsReduser = (state= initialState, action: ActionsType): dialogsPagePropsType => {

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