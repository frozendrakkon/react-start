import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
                { id: 1, message: "Hi" },
                { id: 2, message: "How are you" },
                { id: 3, message: "Fuck you" },
                { id: 4, message: "Boring" },
                { id: 5, message: "See you later" }
            ],
            dialogs: [
                { name: "Sega", id: 1 },
                { name: "Maks", id: 2 },
                { name: "Roman", id: 3 },
                { name: "Nikolay", id: 4 },
                { name: "Mark", id: 5 }
            ],
            newMessageText: ""
        },
        sidebar: {}
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

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state)

    }

};



export default store