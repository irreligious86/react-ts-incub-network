import React from "react";
import classes from  './profile.module.css';
import MyPosts from "./MyPosts/my-posts";
import ProfileInfo from "./ProfileInfo/profile-info";

const Profile = props => {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts
                dispatch={props.dispatch}
                profilePage={props.profilePage}
                newPostText={props.newPostText}
                // addPost={props.addPost}
                // updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;