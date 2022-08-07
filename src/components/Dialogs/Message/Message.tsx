import React from 'react';
import classes from './../Dialogs.module.css';

type MessagePropsType = {
    massage: string
}
export const Message = (props: MessagePropsType) => {
    return (
        <div className={classes.massage}>{props.massage}</div>
    )
}


