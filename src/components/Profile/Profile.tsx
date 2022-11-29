import React from 'react';
import { ProfileType } from '../../redax/profile-reduser';



import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export type ProfilePropsType={
    profile:ProfileType
}
export const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};


