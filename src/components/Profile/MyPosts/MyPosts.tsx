import React from 'react';
import classes from './MyPosts.module.css';
import {Posts} from "./Post/Posts";

export const MyPosts = () => {
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
                    <Posts message={'Hi, how are you?'} likesCount={15}/>
                    <Posts message={"It's my first post"} likesCount={7}/>
                </div>

            </div>

    );
};
