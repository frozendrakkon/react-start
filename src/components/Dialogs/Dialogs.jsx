import classes from "./Dialogs.module.css"
import Message from "./Message/Message"
import DialogItem from "./Message/Message"

const Dialogs = ((props) => {

    let dialogsElements = props.dialogs.map(dialogs      => <DialogItem name={dialogs.name} id={dialogs.id} />)
    let messagesElements = props.messages.map(message => <Message message={message.message} />)

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