import {
    ActionsType,
    AddPostActionType,
    postPropsType,
    profilePagePropsType,
    statePropsType,
    UpdateNewPostTextType
} from "./store";



export type initialStateType = {
    posts: Array<postPropsType>
    newPostText:string
}


 const initialState: initialStateType = {
    posts: [],
    newPostText: 'It-kamasutra'
}


export const profileReduser = (state= initialState, action:ActionsType):initialStateType => {
    switch (action.type){
        case 'ADD_POST':

            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE_NEW_POST_TEXT':
            state.newPostText = action.newText
            return state
        default:
            return state
    }

}

export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: 'ADD_POST'
    }
};

export const updateNewPostCreator = (newText: string): UpdateNewPostTextType => {
    return {
        type: 'UPDATE_NEW_POST_TEXT', newText: newText
    }
};