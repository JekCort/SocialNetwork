import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsType, postsPropsType, profilePagePropsType} from "../../redax/state";

type ProfilePropsType = {
    profilePage: profilePagePropsType
    dispatch: (action: ActionsType) => void
}

export const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch} />
        </div>
    );
};


