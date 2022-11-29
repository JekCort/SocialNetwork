import React from 'react';

import {ProfileInfo} from './ProfileInfo/ProfileInfo';

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redax/profile-reduser";


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
    }