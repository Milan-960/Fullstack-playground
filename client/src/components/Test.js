import React, { useEffect, useState } from "react";

export const Test = () => {
  const [datas, setData] = useState([]);

  console.log(datas);

  useEffect(() => {
    fetch("https://fullstack-playground.vercel.app/data")
      .then((res) => res.json())
      .then((datas) => setData(datas));
  }, []);

  return (
    <div>
      <h1>This is node</h1>
      {/* {data.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.title}</h2>
            <img src={item.img} alt="fake" />
          </div>
        ); */}
      {/* })} */}
    </div>
  );
};
