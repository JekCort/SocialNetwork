import React from 'react';
import classes from './MyPosts.module.css';
import {Posts} from "./Post/Posts";
import {postsPropsType} from "../../../redax/state";


export const MyPosts = (props:postsPropsType) => {

const postsElements = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount}/>)
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
