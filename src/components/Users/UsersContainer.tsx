import React from 'react';
import {connect} from "react-redux";
import {userPropsType} from "../../redax/store";
import {AppStateType} from "../../redax/redux-store";
import {
    follow,
    initialStateType,
    setCurrentPage, setToggleIsFetching,
    setTotalUserCount,
    setUsers,
    unfollow
} from "../../redax/users-reduser";

import axios from "axios";
import {Users} from "./Users";
import {Preloader} from '../common/Preloader/Preloader';


export type mapStateToPropsType = {
    users: initialStateType
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}

export type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<userPropsType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
}


export type UsersAPIComponentPropsType = mapStateToPropsType & mapDispatchToPropsType


export class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType> {
    constructor(props: UsersAPIComponentPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setToggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }

    handlerOnPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(response.data.items)

            })
    }

    render() {


        return <>
            {this.props.isFetching
                ? <Preloader/>
                : null}
            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                handlerOnPageChanged={this.handlerOnPageChanged}
            />

        </>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.users,
        pageSize: state.users.pageSize,
        totalUserCount: state.users.totalUserCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: Array<userPropsType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUserCount: (totalCount: number) => {
//             dispatch(setTotalUserCountAC(totalCount))
//         },
//         setToggleIsFetchingAC: (isFetching: boolean) => {
//             dispatch(setToggleIsFetchingAC(isFetching))
//         }
//     }
// }

export const UsersContainer = connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUserCount,
        setToggleIsFetching
    })(UsersAPIComponent)
