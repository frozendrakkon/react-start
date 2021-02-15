import classes from "./MyPosts.module.css"
import Post from "./Post/Post"



const MyPosts = (() => {

  return (
      <div>
        My Posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <Post />
      </div>
  )

})

export default MyPosts