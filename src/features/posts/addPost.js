import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postSlice";

export const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onSavedPost = () => {
    if (title && content) {
      dispatch(postAdded({ id: nanoid(), title, content }));
      setContent("");
      setTitle("");
    }
  };
  return (
    <section>
      <h3>Add new Post</h3>
      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input
          value={title}
          placeholder="Enter post title"
          name="postTitle"
          id="postTitle"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postContent">Post Content</label>
        <input
          value={content}
          placeholder="Enter post title"
          name="postContent"
          id="postContent"
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" onClick={onSavedPost}>
          Add Post
        </button>
      </form>
    </section>
  );
};
