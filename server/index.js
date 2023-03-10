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
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

import data from "./src/data.js";
import img from "./src/img.js";

import demoRouter from "./src/Routes/demo.js"; // assuming that your postRouter file is named postRouter.js

const app = express();
app.use(bodyParser.json()); // to use body object in requests
const PORT = process.env.PORT || 2002;
dotenv.config();

app.use(morgan("dev"));
app.use(cors());

// CDN CSS
const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

// This code adds the necessary CORS headers to allow any domain to make requests to your server.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API",
      termsOfService: "http://example.com/terms/",
      contact: {
        name: "API Support",
        url: "http://www.exmaple.com/support",
        email: "support@example.com",
      },
    },
    servers: [
      {
        url: "http://localhost:2002",
        description: "My API Documentation",
      },
    ],
  },
  // This is to call all the file
  apis: ["src/**/*.js"],
};

// Setting up the swagger api docs
const specs = swaggerJsDoc(options);
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(specs, { customCssUrl: CSS_URL })
);

//* Route for the root path
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//* we are using the same data here!

// Route for the data
app.get("/posts", (req, res) => {
  res.send(data);
});

// Route for the demo data
app.use("/demo", demoRouter);

// Route for the images we have defined /img patch in img.js
app.use("/img", img);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
