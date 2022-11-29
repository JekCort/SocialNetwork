import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {initialStateType} from "../../redax/users-reduser";
import { NavLink } from 'react-router-dom';



type UsersPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    users: initialStateType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    handlerOnPageChanged: (pageNumber: number) => void
}

export const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

    const pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ''}
                                 onClick={(e) => {
                                     props.handlerOnPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>

            {props.users.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <NavLink to={'/Profile'}>
                        <img width='100px' src={u.photos.small != null ? u.photos.small : userPhoto} alt="image"/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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
    );
};

