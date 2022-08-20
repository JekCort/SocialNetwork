import {rerenderEntireTree} from "../render";

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
}

export type dialogsPagePropsType = {
    messages: Array<messagePropsType>
    dialogs: Array<dialogPropsType>
}


export type statePropsType = {
    profilePage: profilePagePropsType
    dialogsPage: dialogsPagePropsType
}


export const state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 15},
            {id: 2, message: "It's my first post", likesCount: 7}
        ]

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
    sidebar: {}
}

export const addPost = (postMessage: string) => {
    const newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}