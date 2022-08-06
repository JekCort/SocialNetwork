import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

type DialogItemPropsType = {
    name: string
    id: number
}
export const DialogItem = (props: DialogItemPropsType) => {
    const path = "/Dialogs/" + props.id
return(
    <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
)
}



type MessagePropsType = {
    massage: string
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={classes.massage}>{props.massage}</div>
        )
}

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItem}>
               <DialogItem name={"Bob"} id={1}/>
               <DialogItem name={"Eva"} id={2}/>
               <DialogItem name={"Sveta"} id={3}/>
               <DialogItem name={"Viktor"} id={4}/>
               <DialogItem name={"Valera"} id={5}/>
            </div>
            <div className={classes.messages}>

                <Message massage={"Hi"}/>
                <Message massage={"How are a you"}/>
                <Message massage={"Yo"}/>
            </div>
        </div>
    );
};
