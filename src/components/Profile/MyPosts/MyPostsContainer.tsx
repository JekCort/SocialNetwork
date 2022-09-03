import React from 'react';
import {
    ActionsType, dialogsPagePropsType,
    postPropsType, profilePagePropsType,
} from "../../../redax/store";
import {addPostActionCreator, updateNewPostCreator} from "../../../redax/profile-reduser";
import {MyPosts} from "./MyPosts";
import {EmptyObject, Store} from "redux";
import {StoreContext} from '../../../StoreContext';
import {store} from "../../../redax/redux-store";

type MyPostsContainerType = {
    store: Store<EmptyObject & { profilePage: profilePagePropsType, dialogsPage: dialogsPagePropsType }, ActionsType>
}


export const MyPostsContainer = () => {


    // const addPost = () => {
    //     props.store.dispatch(addPostActionCreator())
    // }
    //
    // const onChangeHandler = (text: string) => {
    //     const action = updateNewPostCreator(text)
    //     props.store.dispatch(action)
    // }
    return (
        <StoreContext.Consumer>
            {
            (store) => {
            const addPost = () => {
            store.dispatch(addPostActionCreator())
        }

            const onChangeHandler = (text: string) => {
            const action = updateNewPostCreator(text)
            store.dispatch(action)
        }
            return (
            <MyPosts updateNewPostText={onChangeHandler} addPost={addPost}
            posts={store.getState().profilePage.posts}
            newPostText={store.getState().profilePage.newPostText}/>)}
            }
        </StoreContext.Consumer>
    );
};
