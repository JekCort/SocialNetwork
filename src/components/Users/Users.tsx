import React from 'react';
import {mapDispatchToPropsType, mapStateToPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.png';
import styles from './Users.module.css'

type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType


export class Users extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }

    handlerOnPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(response.data.items)

        })
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        const pages = []
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? styles.selectedPage : ''}
                                 onClick={(e)=>{this.handlerOnPageChanged(p)}}>{p}</span>
                })}
            </div>

            {this.props.users.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <img width='100px' src={u.photos.small != null ? u.photos.small : userPhoto} alt="image"/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </div>
                <div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </div>
                </div>
            </div>)}
        </div>

    }
}
