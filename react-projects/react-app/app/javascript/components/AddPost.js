import React, {useState, useEffect} from "react";
import { navigate } from "@reach/router";
import { Formik, Field, Form } from "formik";

function AddPost() {
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');
  const [isSubmit, setSubmit] = useState(false);
  useEffect(() => {
    const requestPosts = async () => {
      const csrfToken = document.querySelector("meta[name=csrf-token]").content;
      const response = await fetch("/api/posts", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/vnd.api+json",
          "X-CSRF-Token": csrfToken
        },
        body: JSON.stringify({ data: {type: "posts",attributes:{title,body} }})
      });
    };
    requestPosts();
    return() => {
      navigate("/");
    }
  },[isSubmit]);

  const handleSubmit = ()=>{
    setSubmit(true);
  }

  return (
    <div>
      <h2>Add your post</h2>
      <form>
        <input type="text" name="title" onChange = {e => setTitle(e.target.value)} />
        <input type="text" name="body" onChange = {e =>  setBody(e.target.value)} />
        <button type="button" onClick={handleSubmit}>Add Post</button>
      </form>
      
    </div>
  );
}

export default AddPost;