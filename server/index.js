import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import bodyParser from "body-parser";

// Import the router from the hello.js file
import helloRouter from "./src/hello.js";
import todoRouter from "./src/pages/todo.js";

const app = express();

app.use(bodyParser.json()); // to use body object in requests
const PORT = process.env.PORT || 2001;
dotenv.config();

app.use(morgan("dev"));
app.use(cors());

// Here we are calling the basic html
// Use the router from the hello.js file
app.use("/", helloRouter);
// Use the router from the post.js file
app.use("/demo", todoRouter);

app.listen(PORT, () => console.log(`Server runs on port ${PORT}`));
