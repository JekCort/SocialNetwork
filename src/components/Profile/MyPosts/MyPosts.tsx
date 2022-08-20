import React from 'react';
import classes from './MyPosts.module.css';
import {Posts} from "./Post/Posts";
import {postPropsType, postsPropsType, profilePagePropsType} from "../../../redax/state";

type MyPostsPropsType = {
    posts: Array<postPropsType>
    addPost: (postMessage: string) => void

}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        const text = newPostElement.current?.value || ''

        props.addPost(text)
        console.log(props)
    }
    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>

        </div>

    );
};
