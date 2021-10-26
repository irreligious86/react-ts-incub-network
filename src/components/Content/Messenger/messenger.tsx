import React from "react";
import classes from './messenger.module.css';

type MessengerPropsType = {

}

const Messenger: React.FC<MessengerPropsType> = props => {
    return (
        <div className={classes['messenger']}>
            <h3 className="component-title">Messenger</h3>
        </div>
    )
}

export default Messenger;