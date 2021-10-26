import React from "react";
import classes from './profile.module.css';

type ProfilePropsType = {

}

const Profile: React.FC<ProfilePropsType> = props => {
    return (
        <div className={classes['profile']}>
            <h3 className="component-title">Profile</h3>
        </div>
    )
}

export default Profile;