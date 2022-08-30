import React from 'react';
import {
    ActionsType, dialogsPagePropsType,
    postPropsType, profilePagePropsType,
} from "../../../redax/store";
import {addPostActionCreator, updateNewPostCreator} from "../../../redax/profile-reduser";
import {MyPosts} from "./MyPosts";
import {EmptyObject, Store} from "redux";

type MyPostsContainerType = {
    store: Store<EmptyObject & { profilePage: profilePagePropsType, dialogsPage: dialogsPagePropsType }, ActionsType>
}




export const MyPostsContainer = (props: MyPostsContainerType) => {


    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onChangeHandler = (text:string) => {
        const action = updateNewPostCreator(text)
        props.store.dispatch(action)
    }
    return (

        <MyPosts updateNewPostText={onChangeHandler} addPost={addPost} posts={props.store.getState().profilePage.posts} newPostText={props.store.getState().profilePage.newPostText}/>
    );
};
