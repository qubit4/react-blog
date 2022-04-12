import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import classes from "./BlogList.module.css";
import { url_users, url_comments } from "../urls";


const BlogList = ({ blogs }) =>{
    const { data: users  } = useFetch(url_users);
    const { data: comments  } = useFetch(url_comments);
    
    return (
        <div className={classes.home}>
        {users && comments && blogs.map(blog=>(
            <div className="card bg-light mb-3">
            <div className="card-header">Blogger: {(users.find((user) => user.id === blog.userId)).username}</div>
            <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text">{blog.body.substring(0,100)}...</p>
            <Link to={`blogs/${blog.id}`} ><div className="row justify-content-center"><button type="button" class="btn btn-light">See more...</button></div></Link>
            <br />
            <Link to={`blogs/${blog.id}`} className={classes.link}>Number of Comments: {comments.filter((comment) => comment.postId === blog.id).length}</Link>
            </div>
            </div>
        ))}
        </div>
            )
}

export default BlogList;