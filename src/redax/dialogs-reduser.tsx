import {ActionsType, dialogsPagePropsType, NewMessageBodyType, SendMessageType, statePropsType} from "./state";



export const dialogsReduser = (state:dialogsPagePropsType, action:ActionsType):dialogsPagePropsType => {

  switch (action.type){
    case 'UPDATE_NEW_MESSAGE_BODY':
      state.NewMessageBody  = action.body
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
  } as const
};

export const updateNewMessageBodyCreator = (body: string): NewMessageBodyType => {
  return {
    type: 'UPDATE_NEW_MESSAGE_BODY', body: body
  } as const
};