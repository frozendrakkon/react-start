import { NavLink } from "react-router-dom"
import classes from "./Dialogs.module.css"

const DialogItem = ((props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )

})

const Message = ((props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
})

const Dialogs = ((props) => {

    let dialogs = [
        { name: "Sega", id: 1 },
        { name: "Maks", id: 2 },
        { name: "Roman", id: 3 },
        { name: "Nikolay", id: 4 },
        { name: "Mark", id: 5 }
    ]

    let messages = [
        { message: "Hi", id: 1 },
        { message: "How are you", id: 2 },
        { message: "Fuck you", id: 3 },
        { message: "Boring", id: 4 },
        { message: "See you later", id: 5 }
    ]

    let dialogsElements = dialogs.
        map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = messages.
        map(message => <Message message={message.message} />)

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