import classes from "./MyPosts.module.css"
import Post from "./Post/Post"



const MyPosts = (() => {

  let postData = [
    {id: 1, message: "Hi, how are you", likesCount: 12},
    {id: 1, message: "It's my first post", likesCount: 0},

  ]

  return (
    <div>
      <b>My Posts</b>
      <div>
        <textarea></textarea>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className="classes.posts">
        <Post message={postData[0].message} likesCount={postData[0].likesCount} />
      </div>
    </div>
  )

})

export default MyPosts