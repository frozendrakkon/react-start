const UPDATE_NEW_POST_BODY = "UPDATE_NEW_POST_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_BODY:
            state.newMessageText = action.body;
            return state

        case SEND_MESSAGE:
            let body = state.newMessageText;
            state.newMessageText = ""
            state.messages.push({ id: 6, message: body });
            return state
        default:
            return state
    }


}

export const sendMessageCreator = () =>
({
    type: SEND_MESSAGE
})

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_POST_BODY,
    body: body
})

export default dialogsReducer