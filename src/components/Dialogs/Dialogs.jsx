import classes from "./Dialogs.module.css"
import Message from "./Message/Message"
import DialogItem from "./DialogItem/DialogItem"
import React from "react"

const Dialogs = ((props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = props.state.messages.map(message => <Message message={message.message} />)

    let SubmitMessage = React.createRef()

    const addSubmitMessage = (() => {
        let text = SubmitMessage.current.value
        alert(text)
    })

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.message}>
                    {messagesElements}
                    <textarea ref={SubmitMessage}></textarea>
                    <div>
                        <button onClick={addSubmitMessage}>Submit</button>
                    </div>
                </div>
            </div>
        </div>

    )
})

export default Dialogs