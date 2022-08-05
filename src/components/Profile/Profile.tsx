import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://3dwarehouse.sketchup.com/warehouse/v1.0/content/public/8fc6bacc-297b-40c4-9b9f-ce77a75cc55a"
                    alt=""/>
            </div>
            <div>
                ava + desc
            </div>
            <MyPosts/>
        </div>
    );
};
