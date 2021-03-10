const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST-TEXT";;
const ADD_POST = "ADD_POST";

const UPDATE_NEW_POST_BODY = "UPDATE_NEW_POST_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: "Hi, how are you", likesCount: 12 },
                { id: 1, message: "It's my first post", likesCount: 0 },
            ],
            newPostText: ""
        },

        messagesPage: {
            messages: [
                { message: "Hi", id: 1 },
                { message: "How are you", id: 2 },
                { message: "Fuck you", id: 3 },
                { message: "Boring", id: 4 },
                { message: "See you later", id: 5 }
            ],
            dialogs: [
                { name: "Sega", id: 1 },
                { name: "Maks", id: 2 },
                { name: "Roman", id: 3 },
                { name: "Nikolay", id: 4 },
                { name: "Mark", id: 5 }
            ],
            newMessageText: ""
        }
    },

    _callSubscriber() {
        console.log("state")
    },


    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) { // !! {type : "ADD-POSt"}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.messagesPage.newMessageText = action.body;
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageText;
            this._state.messagesPage.newMessageText = ""
            this._state.messagesPage.dialogs.push({ message: body, id: 6 });
            this._callSubscriber(this._state)
        }
    }

}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})


export const SendMessageCreator = () =>
({
    type: SEND_MESSAGE
})

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_POST_BODY,
    body: body
})

export default store