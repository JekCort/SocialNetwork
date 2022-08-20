import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {profilePagePropsType} from "../../redax/state";

type ProfilePropsType = {
    state:profilePagePropsType
}

export const Profile = ({state}: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.posts}/>
        </div>
    );
};


