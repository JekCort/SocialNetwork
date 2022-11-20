import {profileReduser} from "./profile-reduser";
import {dialogsReduser} from "./dialogs-reduser";
import {followAC} from "./users-reduser";


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
export type usersPageType = {

}

export type usersPagePropsType = {
    users: Array<userPropsType>
}

export type userPropsType = {
    id: number
    photoUrl:string
    followed: boolean
    fullName: string
    status: string
    location: locationType
}

type locationType = {
    city: string
    country: string
}
export type statePropsType = {
    profilePage: profilePagePropsType
    dialogsPage: dialogsPagePropsType
    usersPage: usersPagePropsType
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
export type followActionType = {
    type: 'FOLLOW'
    userId:number
}

export type unfollowActionType = {
    type: 'UNFOLLOW'
    userId:number
}

export type setUsersActionType = {
    type: 'SET_USERS'
    users: Array<userPropsType>
}
export type ActionsType = AddPostActionType | UpdateNewPostTextType | NewMessageBodyType | SendMessageType | followActionType | unfollowActionType | setUsersActionType


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
        usersPage: {
            users: [
                {id: 1, photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpokemon.fandom.com%2Fru%2Fwiki%2F%25D0%259F%25D1%2581%25D0%25B0%25D0%25B9%25D0%25B4%25D0%25B0%25D0%25BA&psig=AOvVaw1K1gcMQZR_3JL27p6-2txW&ust=1668952843876000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCfhf2zuvsCFQAAAAAdAAAAABAE', followed: false, fullName: 'Dmitry', status: 'i am a boss', location: {city: 'Minsk', country: 'Belarus'}},
                {id: 2, photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpokemon.fandom.com%2Fru%2Fwiki%2F%25D0%259F%25D1%2581%25D0%25B0%25D0%25B9%25D0%25B4%25D0%25B0%25D0%25BA&psig=AOvVaw1K1gcMQZR_3JL27p6-2txW&ust=1668952843876000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCfhf2zuvsCFQAAAAAdAAAAABAE', followed: true, fullName: 'Anna', status: 'i am a boss', location: {city: 'Moscow', country: 'Russia'}},
                {id: 3, photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpokemon.fandom.com%2Fru%2Fwiki%2F%25D0%259F%25D1%2581%25D0%25B0%25D0%25B9%25D0%25B4%25D0%25B0%25D0%25BA&psig=AOvVaw1K1gcMQZR_3JL27p6-2txW&ust=1668952843876000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCfhf2zuvsCFQAAAAAdAAAAABAE', followed: false, fullName: 'Bob', status: 'i am a boss', location: {city: 'Kiev', country: 'Ukrain'}},
            ]
        }


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

        profileReduser(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
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