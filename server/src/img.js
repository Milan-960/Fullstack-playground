import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from "path";

const router = express();

router.use(bodyParser.json()); // to use body object in requests
router.use(morgan("dev"));
router.use(cors());

// This was we can keep everything inside our src folder!!

// Set up static file serving
const __dirname = path.dirname(new URL(import.meta.url).pathname);
router.use(express.static(path.join(__dirname, "../public/images")));

// Route for serving images
router.get("/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  // This reading public and images!
  const imagePath = path.join(__dirname, "../public/images", imageName);
  res.sendFile(imagePath);
});

export default router;
