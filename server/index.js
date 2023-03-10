// import express from "express";
// import cors from "cors";
// import morgan from "morgan";
// import dotenv from "dotenv";
// import bodyParser from "body-parser";

// // Import the router from the hello.js file
// import helloRouter from "./src/hello.js";
// import todoRouter from "./src/pages/todo.js";

// const app = express();

// app.use(bodyParser.json()); // to use body object in requests
// const PORT = process.env.PORT || 2001;
// dotenv.config();

// app.use(morgan("dev"));
// app.use(cors());

// // Here we are calling the basic html
// // Use the router from the hello.js file
// app.use("/", helloRouter);
// // Use the router from the post.js file
// app.use("/demo", todoRouter);

// app.listen(PORT, () => console.log(`Server runs on port ${PORT}`));

// import express from "express";
// import path from "path";

// const app = express();
// const port = process.env.PORT || 3000;

// // Serve static files from the public directory
// app.use(express.static(path.join(__dirname, "public")));

// // Route to serve the image
// app.get("/image", (req, res) => {
//   // Read the image file and send it in the response
//   const imagePath = path.join(__dirname, "public", "images", "test.png");
//   res.sendFile(imagePath);
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

import express from "express";
// import path from "path";
import data from "./src/data.js";
import img from "./src/img.js";

const app = express();
const PORT = process.env.PORT || 2002;

// This code adds the necessary CORS headers to allow any domain to make requests to your server.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Route for the root path
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Route for the data
app.get("/data", (req, res) => {
  res.send(data);
});

// Route for the images we have defined /img patch in img.js
app.use("/img", img);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
