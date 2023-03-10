// import fs from "fs";
// import path from "path";

// const __dirname = path.dirname(new URL(import.meta.url).pathname);

// const images = fs
//   .readdirSync(path.join(__dirname, "public/images"))
//   .filter((filename) => filename.endsWith(".png"))
//   .map((filename) => {
//     const data = fs.readFileSync(
//       path.join(__dirname, "public/images", filename),
//       {
//         encoding: "base64",
//       }
//     );
//     return `data:image/png;base64,${data}`;
//   });

// const data = [
//   {
//     userId: 1,
//     id: 1,
//     title: "Lorem ipsum dolor sit amet",
//     body: "this is test",
//     img: images[0],
//   },
//   {
//     userId: 2,
//     id: 2,
//     title: "Lorem ipsum dolor sit amet",
//     body: "this is another test",
//   },
// ];

// export default data;

import fs from "fs";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const images = fs
  .readdirSync(path.join(__dirname, "../public/images"))
  .filter((filename) => filename.endsWith(".png"))
  .map((filename) => {
    const data = fs.readFileSync(
      path.join(__dirname, "../public/images", filename),
      {
        encoding: "base64",
      }
    );
    return `data:image/png;base64,${data}`;
  });

const data = [
  {
    userId: 1,
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    body: "this is test",
    img: images[3],
  },
];

export default data;
