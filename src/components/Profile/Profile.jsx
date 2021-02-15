import MyPosts from "./MyPosts/MyPosts"
import classes from "./Profile.module.css"


const Profile = (() => {

  return (
    <div className={classes.content}>
      <div>
        <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" />
      </div>
        <div>
        ava + descr
        </div>
        <MyPosts />
    </div>
  )
})

export default Profile