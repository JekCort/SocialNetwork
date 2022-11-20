import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {userPropsType} from "../../redax/store";
import {AppStateType} from "../../redax/redux-store";
import {followAC, initialStateType, setUsersAC, unfollowAC} from "../../redax/users-reduser";
import {Dispatch} from "redux";


export type mapStateToPropsType = {
    users: initialStateType

}

export type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<userPropsType>) => void

}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId:number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<userPropsType>) => {
            dispatch(setUsersAC(users))
        }
    }

}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
