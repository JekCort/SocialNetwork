import React from 'react';
import classes from './MyPosts.module.css';
import {Posts} from "./Post/Posts";

export const MyPosts = () => {
    const postData = [
        {id: 1, message: "Hi, how are you?", likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 7}
    ]

    return (

            <div className={classes.postsBlock}>
               <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={classes.posts}>
                    <Posts message={postData[0].message} likesCount={postData[0].likesCount}/>
                    <Posts message={postData[1].message} likesCount={postData[1].likesCount}/>
                </div>

            </div>

    );
};
