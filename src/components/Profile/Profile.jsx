import MyPosts from "./MyPosts/MyPosts"
import classes from "./Profile.module.css"


const Profile = (() => {

  return (
    <div>
      <div>
        <img src="http://parksadventure.com/wp-content/uploads/2017/10/header-image-1-2.png" />
      </div>
        <MyPosts />
    </div>
  )
})

export default Profile

