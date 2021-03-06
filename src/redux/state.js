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
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log("state")
    },

    addPost() {
        debugger
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = ""
        this._callSubscriber(this._state)
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },

    subscribe(observer) {
        this._callSubscriber = observer
    }
}



export default store
// window.state = state