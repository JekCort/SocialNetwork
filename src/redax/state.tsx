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
}


export type statePropsType = {
    profilePage: profilePagePropsType
    dialogsPage: dialogsPagePropsType
}

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type ActionsType = AddPostActionType | UpdateNewPostTextType

export type  storePropsType = {
    _state: statePropsType
    _callSubscriber: (state: statePropsType) => void
    getState: () => statePropsType

    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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
                {id: 5, name: "Valera"}
            ]
        },
        // sidebar: {}
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
        if (action.type === ADD_POST) {
            const newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}
export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostCreator = (newText: string): UpdateNewPostTextType => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: newText
    }
};

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