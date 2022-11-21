import React from 'react';
import {mapDispatchToPropsType, mapStateToPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.png';
import {ReactComponent} from "*.svg";

type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType


export class Users extends  React.Component<UsersPropsType>{
constructor(props:UsersPropsType) {
    super(props);}

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

            this.props.setUsers(response.data.items)
        })
    }


    render(){
        return <div>

            {this.props.users.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <img width='100px' src={u.photos.small != null ? u.photos.small : userPhoto} alt="image"/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={()=>{this.props.follow(u.id)}}>Follow</button>}

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
