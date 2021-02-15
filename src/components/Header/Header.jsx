import classes from "./Header.module.css"
console.log(classes)
const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://i.pinimg.com/originals/c2/61/eb/c261eb4f5b4d38cf4f320f9188430c41.png" />
        </header>
    )
}

export default Header