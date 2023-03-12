import React from "react";
import { useState, useEffect } from "react";
import { fetchPosts } from "../Api/index";

export const Data = () => {
  const [posts, setPosts] = useState([]);

  console.log("posts", posts);

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div>
      <h1>Woow!</h1>
      {posts.map((post) => (
        <ul key={post.id} className="img-map">
          <h2>{post.title}</h2>
        </ul>
      ))}
    </div>
  );
};
