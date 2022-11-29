import React from 'react';
import {ProfileType} from '../../../redax/profile-reduser';
import classes from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";

    type ProfileInfoType = {
        profile: ProfileType
    }


    export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile){
        return <Preloader/>
    }

        return (
            <div>
                <div>
                    <img
                        src="https://3dwarehouse.sketchup.com/warehouse/v1.0/content/public/8fc6bacc-297b-40c4-9b9f-ce77a75cc55a"
                        alt=""/>
                </div>
                <div className={classes.discriptionBlock}>
                    <img src={props.profile.photos.small}/>
                    ava + desc
                </div>
            </div>
        );
    };