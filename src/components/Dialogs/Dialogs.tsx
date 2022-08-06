import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';


export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItem}>
                <div className={classes.dialog + ' ' + classes.active}>
                  <NavLink to="/Dialogs/1">Bob</NavLink>
                </div>

                <div className={classes.dialog}>
                  <NavLink to="/Dialogs/2">Eva</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/Dialogs/3">Sveta</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/Dialogs/4">Viktor</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/Dialogs/5">Valera</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.massage}>Hi</div>
                <div className={classes.massage}> How are a you</div>
                <div className={classes.massage}>Yo</div>
            </div>
        </div>
    );
};
