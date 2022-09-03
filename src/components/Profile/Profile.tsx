import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsType, dialogsPagePropsType, profilePagePropsType} from "../../redax/store";
import {EmptyObject, Store} from "redux";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export type ProfileType = {
    store: Store<EmptyObject & { profilePage: profilePagePropsType, dialogsPage: dialogsPagePropsType }, ActionsType>
}
export const Profile = () => {
    // let state = props.store.getState().profilepage

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};


