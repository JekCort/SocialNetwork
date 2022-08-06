import React from 'react';
import classes from './Dialogs.module.css';


export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItem}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Bob
                </div>

                <div className={classes.dialog}>
                    Eva
                </div>
                <div className={classes.dialog}>
                    Sveta
                </div>
                <div className={classes.dialog}>
                    Viktor
                </div>
                <div className={classes.dialog}>
                    Valera
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
