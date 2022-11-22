import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {userPropsType} from "../../redax/store";
import {AppStateType} from "../../redax/redux-store";
import {
    followAC,
    initialStateType,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    unfollowAC
} from "../../redax/users-reduser";
import {Dispatch} from "redux";


export type mapStateToPropsType = {
    users: initialStateType
    pageSize: number
    totalUserCount: number
    currentPage: number
}

export type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<userPropsType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount:(totalCount: number)=> void
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.users,
        pageSize: state.users.pageSize,
        totalUserCount: state.users.totalUserCount,
        currentPage: state.users.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<userPropsType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUserCount: (totalCount: number) => {
            dispatch(setTotalUserCountAC(totalCount))
        }
    }

}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
