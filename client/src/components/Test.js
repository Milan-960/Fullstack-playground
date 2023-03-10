import React, { useEffect, useState } from "react";

export const Test = () => {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    fetch("https://fullstack-playground.vercel.app/demo")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>This is node</h1>
      <div className="img-container">
        {data.map((item, index) => {
          return (
            <div key={index} className="img-map">
              <h2>{item.title}</h2>
              <img src={item.img} alt="fake" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
