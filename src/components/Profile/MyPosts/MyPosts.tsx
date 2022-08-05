import React from 'react';
import classes from './MyPosts.module.css';
import {Posts} from "./Post/Posts";

export const MyPosts = () => {
    return (

            <div>
                My posts
         <Posts message={'Hi, how are you?'} likeCount={15}/>
         <Posts message={"It's my first post"} likeCount={7}/>
            </div>

    );
};
