import React from "react";
import classes from './dialogs.module.css';
import {NavLink} from "react-router-dom";


let Dialog = props => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Dialogs = props => {
    return (
        <div className={classes.dialogs}>
            <h4>Dialogs</h4>
            {
                (props.dialogsState).map(
                    dialog => <Dialog key={dialog.id} id={dialog.id} name={dialog.name}/>
                )
            }
        </div>
    )
}

export default Dialogs;