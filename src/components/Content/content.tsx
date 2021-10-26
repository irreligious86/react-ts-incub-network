import React from "react";
import classes from './content.module.css';
import Messenger from "./Messenger/messenger";
import Profile from "./Profile/profile";

type ContentPropsType = {

}

const Content: React.FC<ContentPropsType> = props => {
    return (
        <div className={classes['content']}>
            <h3 className="component-title">Content</h3>
            <Messenger/>
            <Profile/>
        </div>
    );
}

export default Content;