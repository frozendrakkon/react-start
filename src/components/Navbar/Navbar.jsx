import classes from "./Navbar.module.css"

const Navbar = (() => {
  return (
    <nav className={classes.nav}>
      <div>
        <a className={classes.item} href="#">Profile</a>
      </div>
      <div>
        <a className={classes.item} href="#">Message</a>
      </div>
      <div>
        <a className={classes.item} href="#">News</a>
      </div>
      <div>
        <a className={classes.item} href="#">Music</a>
      </div>
      <div>
        <a className={classes.item} href="#">Settings</a>
      </div>
    </nav>
  )
})

export default Navbar