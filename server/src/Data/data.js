// Step 1: Convert base64-encoded image to Blob object URL

// import fs from "fs";

// function base64ToBlobUrl(base64String) {
//   const byteCharacters = atob(base64String.split(",")[1]);
//   const byteArrays = [];
//   for (let i = 0; i < byteCharacters.length; i++) {
//     byteArrays.push(byteCharacters.charCodeAt(i));
//   }
//   const blob = new Blob([new Uint8Array(byteArrays)], { type: "image/png" }); // Change the image type if needed
//   return URL.createObjectURL(blob);
// }

// // Shorten base64 string by removing everything after the comma
// function shortenBase64(base64String) {
//   return base64String.split(",")[1];
// }

// // Read all image files in the Data directory and convert to base64
// const images = fs.readdirSync("./src/Data").map((filename) => {
//   const data = fs.readFileSync(`./src/Data/${filename}`, {
//     encoding: "base64",
//   });
//   return `data:image/png;base64,${shortenBase64(data)}`;
// });

// const data = [
//   {
//     userId: 1,
//     id: 1,
//     title: "Lorem ipsum dolor sit amet",
//     body: "this is test",
//     img: base64ToBlobUrl(images[0]),
//   },
//   {
//     userId: 2,
//     id: 2,
//     title: "Lorem ipsum dolor sit amet",
//     body: "this is another test",
//     img: base64ToBlobUrl(images[1]),
//   },
// ];

// // Map data and shorten image base64 strings
// const shortenedData = data.map((item) => {
//   return {
//     ...item,
//     img: shortenBase64(item.img),
//   };
// });

// export default shortenedData;

import fs from "fs";
import { Blob } from "buffer";

// This is not woroking on localhost
function base64ToBlobUrl(base64String) {
  const byteCharacters = Buffer.from(base64String.split(",")[1], "base64");
  const blob = new Blob([new Uint8Array(byteCharacters)], {
    type: "image/png",
  });

  return URL.createObjectURL(blob).replace(
    "blob://nodedata",
    "https://localhost:2000"
  );
}

// This is woroking on localhost
function base64ToDataUri(base64String) {
  return `data:image/png;base64,${base64String.split(",")[1]}`;
}

// Read all image files in the Data directory and convert to base64
const images = fs.readdirSync("./src/Data").map((filename) => {
  const data = fs.readFileSync(`./src/Data/${filename}`, {
    encoding: "base64",
  });
  return `data:image/png;base64,${data}`;
});

const data = [
  {
    userId: 1,
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    body: "this is test",
    img: base64ToDataUri(images[0]),
  },
  {
    userId: 2,
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    body: "this is another test",
    img: base64ToDataUri(images[1]),
  },
];

export default data;

// import fs from "fs";
// import { Blob } from "buffer";

// function base64ToBlobUrl(base64String) {
//   const byteCharacters = atob(base64String.split(",")[1]);
//   const byteArrays = [];

//   for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
//     const slice = byteCharacters.slice(offset, offset + 1024);
//     const byteNumbers = new Array(slice.length);
//     for (let i = 0; i < slice.length; i++) {
//       byteNumbers[i] = slice.charCodeAt(i);
//     }
//     const byteArray = new Uint8Array(byteNumbers);
//     byteArrays.push(byteArray);
//   }

//   const blob = new Blob(byteArrays, { type: "image/png" });

//   return URL.createObjectURL(blob);
// }

// // Read all image files in the Data directory and convert to base64
// const images = fs.readdirSync("./src/Data").map((filename) => {
//   const data = fs.readFileSync(`./src/Data/${filename}`, {
//     encoding: "base64",
//   });
//   return `data:image/png;base64,${data}`;
// });

// const data = [
//   {
//     userId: 1,
//     id: 1,
//     title: "Lorem ipsum dolor sit amet",
//     body: "this is test",
//     img: base64ToBlobUrl(images[0]),
//   },
//   {
//     userId: 2,
//     id: 2,
//     title: "Lorem ipsum dolor sit amet",
//     body: "this is another test",
//     img: base64ToBlobUrl(images[1]),
//   },
// ];

// export default data;
