import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "./postSlice";

export const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const renderedPosts = posts.map((post) => (
    <article key={post.id} className="posts-list">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(deletePost({ id: post.id }));
        }}
      >
        Delete Post
      </button>
    </article>
  ));
  return (
    <section className="">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
