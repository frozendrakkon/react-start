import classes from "./Post.module.css"



const Post = ((props) => {

  return (
        <div className={classes.item}>
          <img src="https://i.ytimg.com/vi/Y5GLCBjHR8U/maxresdefault.jpg" alt=""/>
          {props.message}
          <div>
          <span>Like<sub>{props.likesCount}</sub></span>
          </div>
        </div>
  )

})

export default Post