import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsType, dialogsPagePropsType, profilePagePropsType} from "../../redax/store";
import {EmptyObject, Store} from "redux";

export type ProfileType = {
    store: Store<EmptyObject & { profilepage: profilePagePropsType, dialogspage: dialogsPagePropsType }, ActionsType>
}
export const Profile = (props: ProfileType) => {
    let state = props.store.getState().profilepage

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.posts} newPostText={state.newPostText} dispatch={props.store.dispatch} />
        </div>
    );
};


