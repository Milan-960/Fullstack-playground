import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import path from "path";
import data from "../data.js";

const postRouter = express.Router();

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + extension);
  },
});

// Set up multer middleware to handle file uploads
const upload = multer({ storage: storage });

postRouter.use(bodyParser.json()); // to use body object in requests

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - userId
 *         - title
 *         - body
 *         - img
 *       properties:
 *         id:
 *           type: integer
 *           description: The Auto-generated id of a post
 *         userId:
 *           type: integer
 *           description: id of author
 *         title:
 *           type: string
 *           description: title of post
 *         body:
 *           type: string
 *           description: content of post
 *         img:
 *           type: string
 *           description: URL of the image associated with the post
 *       example:
 *         id: 1
 *         userId: 1
 *         title: my title
 *         body: my article
 *         img: https://example.com/image.jpg
 *
 */

/**
 * @swagger
 *  tags:
 *    name: Posts
 *    description: posts of users
 */

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Returns all posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */

postRouter.get("/", (req, res) => {
  res.send(data);
});

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: gets posts by id
 *     tags: [Posts]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: id of post
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: posts by its id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       400:
 *         description: post can not be found
 */

// postRouter.get("/:id", (req, res) => {
//   const post = data.find((post) => post.id === +req.params.id);

//   if (!post) {
//     res.sendStatus(404);
//   } else {
//     res.send(post);
//   }
// });

postRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  const post = data.find((post) => post.id == id);

  if (!post) {
    return res.status(404).send("Post not found");
  }

  return res.json(post);
});

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       500:
 *         description: Some server error
 */

postRouter.post("/", (req, res) => {
  try {
    const post = {
      ...req.body,
      id: data.length + 1,
    };

    data.push(post);

    res.send(post);
  } catch (error) {
    return res.status(500).send(error);
  }
});

/**
 * @swagger
 *  /posts/{id}:
 *    delete:
 *      summary: removes post from array
 *      tags: [Posts]
 *      parameters:
 *        - in: path
 *          name: id
 *          description: post id
 *          required: true
 *          schema:
 *            type: integer
 *      responses:
 *        200:
 *          description: The post was deleted
 *        404:
 *          description: The post was not found
 *
 */

postRouter.delete("/:id", (req, res) => {
  let post = data.find((post) => post.id === +req.params.id);
  const index = data.indexOf(post);

  if (post) {
    data.splice(index, 1);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

export default postRouter;
