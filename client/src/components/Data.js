import React from "react";
import { useState, useEffect } from "react";
import { fetchPosts } from "../Api/index";

export const Data = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Woow!</h1>

      {posts?.map((post, index) => {
        return (
          <div key={index} className="img-map">
            <p>{post.title}</p>
          </div>
        );
      })}
    </div>
  );
};
