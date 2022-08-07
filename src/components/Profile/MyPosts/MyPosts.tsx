import React from 'react';
import classes from './MyPosts.module.css';
import {Posts} from "./Post/Posts";

export const MyPosts = () => {
    const posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 7}
    ]
const postsElements = posts.map(p => <Posts message={p.message} likesCount={p.likesCount}/>)
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
                    {postsElements}
                </div>

            </div>

    );
};
