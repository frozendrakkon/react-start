import classes from "./Dialogs.module.css"
import Message from "./Message/Message"
import DialogItem from "./DialogItem/DialogItem"

const Dialogs = ((props) => {

    let dialogsElements = props.state.dialogs.map(dialog   => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = props.state.messages.map(message => <Message message={message.message} />)

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.message}>
                    {messagesElements}
                </div>
            </div>
        </div>

    )
})

export default Dialogs