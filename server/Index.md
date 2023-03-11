## First, we import the necessary modules:

```
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

import data from "./src/data.js";
import img from "./src/img.js";
import demoRouter from "./src/Routes/demo.js";
```

## express is the main module that will help us create our server. cors and morgan are middleware modules that help with Cross-Origin Resource Sharing (CORS) and logging respectively. dotenv is a module that allows us to load environment variables from a .env file. body-parser is a middleware module that allows us to parse JSON and URL-encoded data from requests. swagger-ui-express and swagger-jsdoc are modules that help us create API documentation. Finally, we import some custom modules that we have created: data, img, and demoRouter.

```
const app = express();
app.use(bodyParser.json()); // to use body object in requests
const PORT = process.env.PORT || 2002;
dotenv.config();

app.use(morgan("dev"));
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
```

### Here we create an instance of express and set up some middleware. body-parser is used here to parse the body of incoming requests as JSON. We also set the port number that the server will listen on, either from the process.env.PORT environment variable (if it exists) or 2002. We then load environment variables from the .env file using dotenv. morgan is used here for logging. Finally, we set up CORS headers to allow any domain to make requests to our server.

```
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
  apis: ["src/**/*.js"],
};

const specs = swaggerJsDoc(options);

app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(specs, { customCssUrl: CSS_URL })
);

```

### Here we set up the API documentation using Swagger. We define the basic information about our API in the definition object, including the title, version, description, and contact information. We also define a server URL where the API is hosted. We then use swagger-jsdoc to create the documentation object using these options. Finally, we use swagger-ui-express to serve and set up the Swagger UI at the /api-docs endpoint.

```
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/posts", (req, res) => {
  res.send(data);
});

app.use("/demo", demoRouter);

app.use("/img", img);

app.listen(PORT, () => {
  console.log(`Server

```

- import express from "express";: imports the Express framework and assigns it to the variable express.
- import cors from "cors";: imports the CORS middleware and assigns it to the variable cors.
  import morgan from "morgan";: imports the Morgan middleware and assigns it to the variable morgan.
- import dotenv from "dotenv";: imports the dotenv module to load environment variables from a .env file and assigns it to the variable dotenv.
- import bodyParser from "body-parser";: imports the body-parser middleware to parse the request body and assigns it to the variable bodyParser.
- import swaggerUI from "swagger-ui-express";: imports the swagger-ui-express module to serve the Swagger UI and assigns it to the variable swaggerUI.
- import swaggerJsDoc from "swagger-jsdoc";: imports the swagger-jsdoc module to generate Swagger API documentation and assigns it to the variable swaggerJsDoc.
- import data from "./src/data.js";: imports the data array from the data.js file.
- import img from "./src/img.js";: imports the img middleware from the img.js file.
- import demoRouter from "./src/Routes/demo.js";: imports the demoRouter router from the demo.js file located in the Routes directory.
- const app = express();: creates an Express application instance and assigns it to the variable app.
- app.use(bodyParser.json());: adds the body-parser middleware to parse JSON data in the request body.
- const PORT = process.env.PORT || 2002;: assigns the port number to listen on to the variable PORT. If a port number is specified in the environment variables, it will use that port number, otherwise it will use port 2002.
- dotenv.config();: loads environment variables from a .env file.
- app.use(morgan("dev"));: adds the morgan middleware to log HTTP requests in the console.
- app.use(cors());: adds the cors middleware to allow cross-origin requests.
- app.use((req, res, next) => { ... });: adds middleware to set the necessary CORS headers for all routes.
