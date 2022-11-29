import {
    ActionsType,
    AddPostActionType,
    postPropsType,
    setUserProfileActionType,
    UpdateNewPostTextType
} from "./store";



export type ProfileType = {
    aboutMe: string
    contacts: contactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: photosType
}

type contactsType = {
    facebook: string
    website: null,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: null,
    github: string,
    mainLink: null
}
type photosType = {
    small: string
    large: string
}

export type initialStateType = {
    posts: Array<postPropsType>
    newPostText: string
    profile: ProfileType

}

const initialState: initialStateType = {
    posts: [],
    newPostText: 'It-kamasutra',
    profile: {}
}


export const profileReduser = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'ADD_POST':
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }

        case 'UPDATE_NEW_POST_TEXT':
            return {
                ...state,
                newPostText: action.newText
            }

        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }

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

export const setUserProfile = (profile: ProfileType): setUserProfileActionType => {
    return {
        type: 'SET_USER_PROFILE', profile
    }
};