import React from 'react';
import classes from './Posts.module.css';

type messagePropsType ={
    message: string
    likesCount: number
}

export const Posts = (props: messagePropsType) => {
    return (

        <div className={classes.item}>
            <img src="https://www.pokemoncenter.com/products/images/P8041/710-29297/P8041_710-29297_01_full.jpg"/>
            {props.message}
            <div>
                <span>like</span>
                {props.likesCount}
            </div>
        </div>

    );
};
