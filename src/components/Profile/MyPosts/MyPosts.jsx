import classes from "./MyPosts.module.css"
import Post from "./Post/Post"



const MyPosts = ((props) => {

  let posts = props.postData.map( post => <Post message={post.message} likesCount={post.likesCount} />)

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
        {posts}
      </div>
    </div>
  )

})

export default MyPosts