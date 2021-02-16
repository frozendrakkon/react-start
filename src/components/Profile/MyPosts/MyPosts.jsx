import classes from "./MyPosts.module.css"
import Post from "./Post/Post"



const MyPosts = (() => {

  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className="classes.posts">
        <Post message="Hi, how are you?" />
        <Post message="It's my first post" />
      </div>
    </div>
  )

})

export default MyPosts