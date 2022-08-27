import {ActionsType, AddPostActionType, profilePagePropsType, statePropsType, UpdateNewPostTextType} from "./state";

export const profileReduser = (state:profilePagePropsType, action:ActionsType):profilePagePropsType => {

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
    } as const
};

export const updateNewPostCreator = (newText: string): UpdateNewPostTextType => {
    return {
        type: 'UPDATE_NEW_POST_TEXT', newText: newText
    } as const
};