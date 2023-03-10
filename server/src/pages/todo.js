import express from "express";
import bodyParser from "body-parser";
import data from "../Data/data.js";

const postRouter = express.Router();

postRouter.use(bodyParser.json()); // to use body object in requests

postRouter.get("/", (req, res) => {
  res.send(data);
});

export default postRouter;
