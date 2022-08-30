import {profileReduser} from "./profile-reduser";
import {dialogsReduser} from "./dialogs-reduser";


export type postPropsType = {
    id: number,
    message: string,
    likesCount: number
}
export type postsPropsType = {
    posts: Array<postPropsType>

}

export type dialogPropsType = {
    id: number,
    name: string
}
export type dialogsPropsType = {
    dialogs: Array<dialogPropsType>
}

export type messagePropsType = {
    id: number,
    message: string
}
export type messagesPropsType = {
    messages: Array<messagePropsType>
}

export type profilePagePropsType = {
    posts: Array<postPropsType>
    newPostText: string
}

export type dialogsPagePropsType = {
    messages: Array<messagePropsType>
    dialogs: Array<dialogPropsType>
    NewMessageBody: string
}


export type statePropsType = {
    profilePage: profilePagePropsType
    dialogsPage: dialogsPagePropsType
}

export type AddPostActionType = {
    type: 'ADD_POST'
}

export type UpdateNewPostTextType = {
    type: 'UPDATE_NEW_POST_TEXT'
    newText: string
}

export type NewMessageBodyType = {
    type: 'UPDATE_NEW_MESSAGE_BODY'
    body: string
}

export type SendMessageType = {
    type: 'SEND_MESSAGE'

}

export type ActionsType = AddPostActionType | UpdateNewPostTextType | NewMessageBodyType | SendMessageType


export type  storePropsType = {
    _state: statePropsType
    _callSubscriber: (state: statePropsType) => void
    getState: () => statePropsType

    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}


export const store: storePropsType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 15},
                {id: 2, message: "It's my first post", likesCount: 7}
            ],
            newPostText: 'It-kamasutra'

        },
        dialogsPage: {
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
        },
    },
    _callSubscriber(state: statePropsType) {
        console.log('sdsd')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        profileReduser(this._state.profilePage ,action)
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action)
        this. _callSubscriber(this._state)
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


// function dialogsReduser(dialogsPage: dialogsPagePropsType, action: ActionsType): dialogsPagePropsType {
//     throw new Error("Function not implemented.");
// }
// let rerenderEntireTree = (state:statePropsType) => {
//     console.log('sdsd')
// }
//
// export const state = {
//     profilePage: {
//         posts: [
//             {id: 1, message: "Hi, how are you?", likesCount: 15},
//             {id: 2, message: "It's my first post", likesCount: 7}
//         ],
//         newPostText:'It-kamasutra'
//
//     },
//     dialogsPage: {
//         messages: [
//             {id: 1, message: "Hi"},
//             {id: 2, message: "How are a you"},
//             {id: 3, message: "Yo"},
//             {id: 4, message: "Yo"},
//             {id: 5, message: "Yo"}
//         ],
//         dialogs: [
//             {id: 1, name: "Bob"},
//             {id: 2, name: "Eva"},
//             {id: 3, name: "Sveta"},
//             {id: 4, name: "Viktor"},
//             {id: 5, name: "Valera"}
//         ]
//     },
//     // sidebar: {}
// }


// export const addPost = () => {
//     const newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     }
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText = ''
//     rerenderEntireTree(state)
// }
//
// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree(state)
// }
//
// export const subscribe = (observer:any) => {
//     rerenderEntireTree = observer
// }