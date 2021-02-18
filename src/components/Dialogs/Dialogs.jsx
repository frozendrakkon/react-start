import classes from "./Dialogs.module.css"

const Dialogs = ((props) => {
    return (

        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <div className={classes.dialog + " " + classes.active}>
                        Sega
                    </div>
                    <div className={classes.dialog}>
                        Maks
                    </div>
                    <div className={classes.dialog}>
                        Roman
                    </div>
                </div>
                <div className={classes.message}>
                    <div className={classes.message}>Hi</div>
                    <div className={classes.message}>How are you?</div>
                    <div className={classes.message}>Fuck you</div>
                </div>
            </div>
        </div>

    )
})

export default Dialogs