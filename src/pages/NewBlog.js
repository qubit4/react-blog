import { useState } from "react";
import classes from "./NewBlog.module.css";
import { url_posts } from "../urls";

const NewBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const handleReset = () => {
      setTitle("");
      setBody("");
      setAuthor("");
    }
      
  const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { title, body, author };

      fetch(url_posts, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)})
      .then((response) => response.json())
      .then((json) => console.log(json));

      handleReset()
      }
  
  return (
    <div className={classes.addnew}>
        <br />
        <br />
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog:</label>
        <input
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></input>
        <label>Blogger:</label>
        <input 
          type="text" 
          required 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br/>
        <button>Add Blog</button>
      </form>
    </div>
  );
}
 
export default NewBlog;