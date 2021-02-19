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

const Message = ((props) =>{
    return(
        <div className={classes.message}>{props.message}</div>
    )
})

const Dialogs = ((props) => {
    return (

        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <DialogItem name="Sega" id="1" />
                    <DialogItem name="Maks" id="2" />
                    <DialogItem name="Roman" id="3" />
                    <DialogItem name="Nikolay" id="4" />
                    <DialogItem name="Mark" id="5" />
                </div>
                <div className={classes.message}>
                    <Message message="Hi" />
                    <Message message="How are you?" />
                    <Message message="Fuck you" />
                    <Message message="Boring" />
                    <Message message="See you later" />
                </div>
            </div>
        </div>

    )
})

export default Dialogs