import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type postPropsType = {
    id: number,
    message: string,
    likesCount: number
}

type postsPropsType = {
    posts: Array<postPropsType>

}

export const Profile = (props:postsPropsType) => {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};
