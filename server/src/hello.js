import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

const router = express();

router.use(bodyParser.json()); // to use body object in requests
router.use(morgan("dev"));
router.use(cors());

// This was we can keep everything inside our src folder!!

router.get("/", (req, res) => {
  res.send("Hello!!!");
});

export default router;
