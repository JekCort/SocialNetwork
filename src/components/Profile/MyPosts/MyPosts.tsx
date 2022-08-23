import React from 'react';
import classes from './MyPosts.module.css';
import {Posts} from "./Post/Posts";
import {ActionsType, postPropsType, postsPropsType, profilePagePropsType} from "../../../redax/state";

type MyPostsPropsType = {
    posts: Array<postPropsType>
    newPostText: string
    dispatch: (action: ActionsType) => void


}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch({type: 'ADD-POST'})

    }

    const onChangeHandler = () => {
        const text = newPostElement.current?.value || ''
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
    }
    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeHandler} ref={newPostElement} value={props.newPostText}/>
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
