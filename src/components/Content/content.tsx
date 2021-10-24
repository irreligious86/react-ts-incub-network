import React from "react";
import classes from './content.module.css';
import Profile from "./Profile/profile";
import Messenger from "./Messenger/messenger";
import Music from "./Music/music";
import News from "./News/news";
import Settings from "./Settings/settings";
import {Route} from "react-router-dom";

type ContentPropsType = {
    dispatch: any
    profilePage: any
    newPostText: any
    store: {}
    state: {}
    messengerState: {
        state: {}
        // messages: any
        // dialogs: any
        // newMessageBody: string
    }
}


const Content = (props: ContentPropsType) => {
    return (
        <div className={classes.content}>
            <Route
                path="/profile"
                render={() => <Profile
                    dispatch={props.dispatch}
                    profilePage={props.profilePage}
                    newPostText={props.newPostText}
                />}/>
            <Route
                path="/messenger"
                render={() => <Messenger
                    messengerState={props.state.messenger}
                    store={props.store}
                    dispatch={props.dispatch}
                />}

            />
            <Route
                path="/news"
                component={News}/>
            <Route
                path="/music"
                component={Music}/>
            <Route
                path="/settings"
                component={Settings}/>
        </div>
    )
}

export default Content;