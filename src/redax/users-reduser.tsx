import {
    ActionsType,
    followActionType, setCurrentPageActionType, setTotalUserCountActionType,
    setUsersActionType,
    unfollowActionType,
    userPropsType
} from "./store";


export type initialStateType = {
    users: Array<userPropsType>
    pageSize:number
    totalUserCount: number
    currentPage: number

}


const initialState: initialStateType = {
    users: [],
    pageSize: 10,
    totalUserCount:0,
    currentPage: 1

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
            return {...state, users: action.users}
        }
        case 'SET_CURRENT_PAGE':{
            return {...state, currentPage: action.currentPage}
        }
        case 'SET_TOTAL_USER_COUNT':{
            return {...state, totalUserCount: action.totalCount}
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

export const setCurrentPageAC = (currentPage: number): setCurrentPageActionType => {
    return {
        type: 'SET_CURRENT_PAGE', currentPage
    }
};
export const setTotalUserCountAC = (totalCount: number): setTotalUserCountActionType => {
    return {
        type: 'SET_TOTAL_USER_COUNT', totalCount
    }
};