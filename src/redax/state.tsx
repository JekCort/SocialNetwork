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

export type  storePropsType = {
    _state: statePropsType
    getState: () => statePropsType
    rerenderEntireTree: (state: statePropsType) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void

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
                {id: 5, name: "Valera"}
            ]
        },
        // sidebar: {}
    },
    getState() {
        return this._state
    },
    rerenderEntireTree(state: statePropsType) {
        console.log('sdsd')
    },
    addPost() {
        const newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this.rerenderEntireTree(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this.rerenderEntireTree(this._state)
    },
    subscribe(observer: () => void) {
        this.rerenderEntireTree = observer
    }
}


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