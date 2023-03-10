import React, { useEffect, useState } from "react";

export const Test = () => {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    fetch("http://localhost:2000/demo")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>This is node</h1>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <img src={item.img} alt="fake" />
          </div>
        );
      })}
    </div>
  );
};
