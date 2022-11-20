import React from 'react';

import {mapDispatchToPropsType, mapStateToPropsType} from "./UsersContainer";


type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType


export const Users = (props: UsersPropsType) => {
    console.log(props)

    if (props.users.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://pbs.twimg.com/media/CpdgIWEWcAA47kc.jpg',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'i am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://pbs.twimg.com/media/CpdgIWEWcAA47kc.jpg',
                    followed: true,
                    fullName: 'Anna',
                    status: 'i am a boss',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://pbs.twimg.com/media/CpdgIWEWcAA47kc.jpg',
                    followed: false,
                    fullName: 'Bob',
                    status: 'i am a boss',
                    location: {city: 'Kiev', country: 'Ukrain'}
                },
            ]
        )
    }

    return <div>

        {props.users.users.map(u => <div key={u.id}>
            <div>
                <div>
                    <img width='200px' src={u.photoUrl} alt="image"/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                    : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}

                </div>
            </div>
            <div>
                <div>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </div>
            </div>
        </div>)}

    </div>

}
