import React from "react";
import classes from './post.module.css';
import avatar from './no_avatar.jpg';


function Post(props) {
    return (
        <div className={classes.post}>
            <h5 className={classes['post-title']}>Post</h5>
            <div className={classes['post-body']}>
                <div className={classes['about-user']}>
                    <img className={classes.avatar} src={avatar} alt="user photo"/>
                    <span>User</span>
                </div>
                <div className={classes.message}>{props.message}</div>
                <div className={classes['btn-block']}>
                    <button type="button" className="btn  btn-sm btn-success">Edit</button>
                    <button type="button" className="btn btn-sm btn-danger">Del</button>
                </div>
            </div>
        </div>
    )
}

export default Post;