import React from 'react';
import {addPostActionCreator, updateNewPostCreator} from "../../../redax/profile-reduser";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redax/redux-store";

import {Dispatch} from "redux";
import {postPropsType} from "../../../redax/store";




type mapStateToPropsType = {
    posts: Array<postPropsType>
    newPostText: string
}

type mapDispatchToPropsType ={
    updateNewPostText: (text:string) => void
    addPost: () => void
}


    let mapStateToProps = (state: AppStateType):mapStateToPropsType => {
        return {
            posts: state.profilePage.posts,
            newPostText: state.profilePage.newPostText
        }
    }

    let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
        return {
            updateNewPostText: (text:string) => {
                const action = updateNewPostCreator(text)
                dispatch(action)
            },
            addPost: ()=>{
              dispatch(addPostActionCreator())
            }
        }
    }

  export const  MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
