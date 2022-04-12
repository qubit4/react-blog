import { useParams } from "react-router-dom";
import useFetch from "../useFetch";


const CommentList = () => {

    const { id } = useParams()
    const { data: comments  } = useFetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
  
    return (
    <>
    {comments && comments.map(comment =>
    <div class="card bg-light mb-3">
    <div class="card-header text-uppercase">
        {comment.name} </div>
    <div class="card-body">
    <h5 class="card-title text-lowercase">{comment.email}</h5>
    <p class="card-text"> {comment.body}</p>
    </div>
    </div>

    )}
    </>)}

export default CommentList;
