import React from "react";
import classes from './messenger.module.css';
import Messages from "./Messages/messages";
import Dialogs from "./Dialogs/dialogs";

type MessengerPropsType = {
    messengerState: {messages: any, dialogs: any}
    store: {}
    dispatch: any
}

const Messenger: React.FC<MessengerPropsType> = props => {
    return (
        <div className={classes.messenger}>
            <Dialogs dialogsState={props.messengerState.dialogs}/>
            <Messages
                messagesState={props.messengerState.messages}
                store={props.store}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Messenger;