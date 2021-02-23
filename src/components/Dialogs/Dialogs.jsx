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

    let dialogsData = [
        { name: "Sega", id: 1 },
        { name: "Maks", id: 2 },
        { name: "Roman", id: 3 },
        { name: "Nikolay", id: 4 },
        { name: "Mark", id: 5 }
    ]


    let messagesData = [
        { message: "Hi", id: 1 },
        { message: "How are you", id: 2 },
        { message: "Fuck you", id: 3 },
        { message: "Boring", id: 4 },
        { message: "See you later", id: 5 }
    ]


    return (

        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                </div>
                <div className={classes.message}>
                    <Message message={messagesData[0].message} />
                </div>
            </div>
        </div>

    )
})

export default Dialogs