import { NavLink } from "react-router-dom"
import classes from "./Navbar.module.css"

const Navbar = (() => {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink className={classes.item} to="/profile" activeClassName={classes.active}>Profile</NavLink>
      </div>
      <div>
        <NavLink className={classes.item} to="/dialogs" activeClassName={classes.active}>Message</NavLink>
      </div>
      <div>
        <NavLink className={classes.item} to="/news" activeClassName={classes.active}>News</NavLink>
      </div>
      <div>
        <NavLink className={classes.item} to="/music">Music</NavLink>
      </div>
      <div>
        <NavLink className={classes.item} to="/settings">Settings</NavLink>
      </div>
    </nav>
  )
})

export default Navbar