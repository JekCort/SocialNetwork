import React from 'react';
import classes from './MyPosts.module.css';
import {Posts} from "./Post/Posts";
import {postPropsType, profilePagePropsType} from "../../../redax/store";


type MyPostsPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    posts: Array<postPropsType>
    newPostText: string


}


export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        props.addPost()

    }

    const onChangeHandler = () => {
        const text = newPostElement.current?.value || ''
        props.updateNewPostText(text)

    }
    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeHandler}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>

        </div>

    );
};
