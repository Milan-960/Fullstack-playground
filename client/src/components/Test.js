import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Test = () => {
  const { t } = useTranslation();

  const [data, setData] = useState([]);

  console.log(data);

  // Making setTimeout for redusing
  useEffect(() => {
    setTimeout(() => {
      fetch("https://fullstack-playground.vercel.app/demo")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, 1000);
  }, []);

  return (
    <div>
      <h1>This is node</h1>
      <div className="img-container">
        {data.map((item, index) => {
          return (
            <div key={index} className="img-map">
              <p>{t(item.title)}</p>
              <img src={item.img} alt="fake" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
