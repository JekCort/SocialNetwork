import {
    ActionsType,
    followActionType,
    setUsersActionType,
    unfollowActionType,
    userPropsType
} from "./store";


export type initialStateType = {
    users: Array<userPropsType>

}


const initialState: initialStateType = {
    users: []
}


export const usersReducer = (state = initialState, action: ActionsType): initialStateType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'SET_USERS':{
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}


export const followAC = (userId: number): followActionType => {
    return {
        type: 'FOLLOW', userId: userId
    }
};

export const unfollowAC = (userId: number): unfollowActionType => {
    return {
        type: 'UNFOLLOW', userId: userId
    }
};

export const setUsersAC = (users: Array<userPropsType>): setUsersActionType => {
    return {
        type: 'SET_USERS', users
    }
};