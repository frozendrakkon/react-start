import classes from "./MyPosts.module.css"
import Post from "./Post/Post"
import React from 'react';

const MyPosts = ((props) => {

  let posts = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: "ADD-POST" })
  };

  let onPostChange = () => {
    let text = newPostElement.current.value
    let action = { type: "UPDATE-NEW-POST-TEXT", newText: text }
    props.dispatch(action)
  }

  return (
    <div>
      <b>My Posts</b>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className="classes.posts">
        {posts}
      </div>
    </div>
  )

})

export default MyPosts