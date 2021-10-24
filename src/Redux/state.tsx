const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


type MessageType = {
    id: number
    message: string
}

type MessengerType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
}

type PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfileType = {
    posts: Array<PostType>
}

type DialogType = {
    name: string
    id: number
}

type RootStateType = {
    profile: ProfileType
    newPostText: string
    messenger: MessengerType
    news: any
    music: any
    settings: any
}

type StoreType = {
    _state: RootStateType
    _callSubscriber: any
    getState: any
    subscribe: any
    dispatch: any
}

let store: StoreType = {

    _state: {
        profile: {
            posts: [
                {id: 1, message: "Hello! It is my post.", likesCount: 3},
                {id: 2, message: "Hello! It is my post.", likesCount: 3},
                {id: 3, message: "Hello! It is my post.", likesCount: 3},
                {id: 4, message: "Hello! It is my post.", likesCount: 3},
                {id: 5, message: "Hello! It is my post.", likesCount: 3},
            ]
        },
        newPostText: "IT-camasutra.com",
        messenger: {
            messages: [
                {id: 1, message: "Hello! IT is my message."},
                {id: 2, message: "Hello! IT is my message."},
                {id: 3, message: "Hello! IT is my message."},
                {id: 4, message: "Hello! IT is my message."},
                {id: 5, message: "Hello! IT is my message."},
            ],
            dialogs: [
                {name: 'Alex', id: 1},
                {name: 'Dimych', id: 2},
                {name: 'Jurij', id: 3},
                {name: 'John', id: 4},
                {name: 'jack', id: 5}
            ],
            newMessageBody: ''
        },
        news: {},
        music: {},
        settings: {}
    },
    _callSubscriber() {
        console.log('rerender')
    },
    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },
    dispatch(action: any) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 58,
                message: this._state.newPostText,
                likesCount: 0
            };
            this._state.profile.posts.push(newPost);
            this._state.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            store._state.messenger.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messenger.newMessageBody;
            this._state.messenger.newMessageBody = '';
            if (body !== '') {
                this._state.messenger.messages.push({id: 100, message: body});
                this._callSubscriber(this._state);
            }
        }
    },

}


export const addPostActionCreator = () => ({
    type: ADD_POST
});
export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
});
export const updateNewMessageBodyCreator = (body: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
});


export default store;