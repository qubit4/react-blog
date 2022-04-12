import React from 'react';
import useFetch from '../useFetch';
import {useParams} from 'react-router-dom';
import CommentList from '../components/CommentList';
import classes from "./BlogDetails.module.css";
import { url_posts, url_users } from "../urls";


const BlogDetails = () =>{
  const { id } = useParams()
  const { data: blog } = useFetch(url_posts + `/${id}`);
  const { data: users } = useFetch(url_users)
  
  const author = blog && users && users.find((user) => user.id === blog.userId);

return (
  <div className={classes.details}>
   {blog && author &&
        <>
        <div className="card bg-light mb-3">
        <div className="card-header text-uppercase">Blogger: {author.username}</div>
        <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <p className="card-text">{blog.body}</p>
        </div>
        </div>
        <h2>Comments:</h2>
        <br />
        <CommentList />
        </>
    }
  </div>
        )};

export default BlogDetails;
