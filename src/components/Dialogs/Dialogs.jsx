import classes from "./Dialogs.module.css"
import Message from "./Message/Message"

import DialogItem from "./DialogItem/DialogItem"
import React from "react"
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer"

const Dialogs = ((props) => {
    let state = props.store.getState().messagesPage
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = state.messages.map(message => <Message messages={message.message} />)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = (() => {
        props.store.dispatch(sendMessageCreator())
    })

    let onNewMessageChange = ((event) => {
        let body = event.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    })

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.message}>
                    <div> {messagesElements} </div>
                    <div>
                        <div>
                            <textarea
                                onChange={onNewMessageChange}
                                value={newMessageBody}
                                placeholder="Enter your message">
                            </textarea>
                        </div>
                        <div>
                            <button
                                onClick={onSendMessageClick}>Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
})

export default Dialogs