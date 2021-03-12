import classes from "./MyPosts.module.css"
import Post from "./Post/Post"
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";

const MyPosts = ((props) => {

  let posts = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount} />);

  let newPostElement = React.createRef();

   const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

   const onPostChange = () => {
    let text = newPostElement.current.value
    let action = updateNewPostTextActionCreator(text)
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