import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from "path";
import fs from "fs";

const router = express();

router.use(bodyParser.json()); // to use body object in requests
router.use(morgan("dev"));
router.use(cors());

// Set up static file serving
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Route for serving translation files
router.get("/:language.json", (req, res) => {
  const language = req.params.language;
  const filePath = path.join(__dirname, `./translations/${language}.json`);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading translation file: ${err}`);
      return res
        .status(404)
        .send(`Translation file not found for language '${language}'`);
    }

    try {
      const translation = JSON.parse(data);
      res.send(translation);
    } catch (err) {
      console.error(`Error parsing translation file: ${err}`);
      return res.status(500).send("Error parsing translation file");
    }
  });
});

export default router;
