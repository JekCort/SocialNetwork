import React from 'react';
import {mapDispatchToPropsType, mapStateToPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.png';

type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType


export const Users = (props: UsersPropsType) => {
    console.log(props)

    if (props.users.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

            props.setUsers(response.data.items)
        })


    }

    return <div>

        {props.users.users.map(u => <div key={u.id}>
            <div>
                <div>
                    <img width='100px' src={u.photos.small != null ? u.photos.small : userPhoto} alt="image"/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                    : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}

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
