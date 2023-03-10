// import express from "express";
// import bodyParser from "body-parser";
// import data from "./demo/data.js";

// const postRouter = express.Router();

// postRouter.use(bodyParser.json()); // to use body object in requests

// /**
//  * @swagger
//  * components:
//  *   schemas:
//  *     Demo:
//  *       type: object
//  *       required:
//  *         - userId
//  *         - title
//  *         - body
//  *       properties:
//  *         id:
//  *           type: integer
//  *           description: The Auto-generated id of a post
//  *         userId:
//  *           type: integer
//  *           description: id of author
//  *         title:
//  *           type: string
//  *           description: title of post
//  *         body:
//  *           type: string
//  *           descripton: content of post
//  *         img:
//  *           type: string
//  *           description: URL of the image associated with the post
//  *       example:
//  *         id: 1
//  *         userId: 1
//  *         title: my title
//  *         body: my article
//  *         img: https://example.com/image.jpg
//  *
//  */

// /**
//  * @swagger
//  *  tags:
//  *    name: Demo
//  *    description: posts of users
//  */

// /**
//  * @swagger
//  * /demo:
//  *   get:
//  *     summary: Returns all demo posts
//  *     tags: [Demo]
//  *     responses:
//  *       200:
//  *         description: the list of the demo posts
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/Post'
//  */

// // For getting the fake data

// postRouter.get("/", (req, res) => {
//   res.send(data);
// });

// /**
//  * @swagger
//  * /demo/{id}:
//  *   get:
//  *     summary: gets posts by id
//  *     tags: [Demo]
//  *     parameters:
//  *       - in : path
//  *         name: id
//  *         description: id of post
//  *         schema:
//  *           type: integer
//  *         required: true
//  *     responses:
//  *       200:
//  *         description: posts by its id
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/Demo'
//  *       400:
//  *         description: post can not be found
//  */

// // postRouter.get("/:id", (req, res) => {
// //   const post = data.find((post) => post.id === +req.params.id);

// //   if (!post) {
// //     res.sendStatus(404);
// //   } else {
// //     res.send(post);
// //   }
// // });

// postRouter.get("/:id", (req, res) => {
//   const id = req.params.id;
//   const post = data.find((post) => post.id == id);

//   if (!post) {
//     return res.status(404).send("Post not found");
//   }

//   return res.json(post);
// });

// export default postRouter;

import express from "express";
import bodyParser from "body-parser";
import data from "./demo/data.js";

const demoRouter = express.Router();

demoRouter.use(bodyParser.json()); // to use body object in requests

/**
 * @swagger
 * components:
 *   schemas:
 *     Demo:
 *       type: object
 *       required:
 *         - userId
 *         - title
 *         - body
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
 *           descripton: content of post
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
 *    name: Demo
 *    description: posts of users
 */

/**
 * @swagger
 * /demo:
 *   get:
 *     summary: Returns all demo posts
 *     tags: [Demo]
 *     responses:
 *       200:
 *         description: the list of the demo posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Demo'
 */

// For getting the fake data
demoRouter.get("/", (req, res) => {
  res.send(data);
});

/**
 * @swagger
 * /demo/{id}:
 *   get:
 *     summary: gets posts by id
 *     tags: [Demo]
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
 *               $ref: '#/components/schemas/Demo'
 *       404:
 *         description: post not found
 */

demoRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  const post = data.find((post) => post.id == id);

  if (!post) {
    return res.status(404).send("Post not found");
  }

  return res.json(post);
});

export default demoRouter;
