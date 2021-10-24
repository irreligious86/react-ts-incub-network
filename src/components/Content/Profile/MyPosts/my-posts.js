import React from "react";
import classes from './my-posts.module.css';
import Post from "./Post/post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/state";


const MyPosts = props => {

    let newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }


    const onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={classes.myPosts}>
            <h4>My posts</h4>
            <div className={classes['posts-controls']}>
                <button
                    type='button'
                    onClick={addPost}>
                    Add new post
                </button>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    name=""
                    id=""
                    cols="40"
                    rows="1"
                    value={props.newPostText}/>
            </div>
            {
                (props.profilePage).map(
                    post => <Post
                        key={post.id}
                        id={post.id}
                        message={post.message}
                        likesCount={post.likesCount}/>
                )
            }
        </div>
    )
}

export default MyPosts;