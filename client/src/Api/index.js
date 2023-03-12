import axios from "axios";

const API = "https://nodejs-swagger-api.vercel.app/posts";

//* this is with async
// export const fetchPosts = async () => {
// try {
//   const response = await axios.get(API);
//   const projects = response.data;
//   return projects;
// } catch (error) {
//   console.log(error);
//   throw error;
// }
// };

//* this is with promise
// export const fetchPosts = () => {
//   // Immediately return a promise to minimize chance of an error being thrown
//   return new Promise((resolve, reject) => {
//     // do something async
//     axios
//       .get(API)
//       .then((response) => {
//         setTimeout(() => {
//           // handle success
//           const projects = response.data;
//           resolve(projects);
//           console.log("projects", projects);
//         }, 1000);
//       })
//       .catch((error) => {
//         // handle error
//         reject(error);
//       });
//   });
// };

//* this is with async and Promises
// export const fetchPosts = async () => {
//   try {
//     const response = await axios.get(API);
//     const projects = response.data;
//     // handle success
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     console.log("projects", projects);
//     return projects;
//   } catch (error) {
//     // handle error
//     throw error;
//   }
// };

//* this is with async and Promises Resolved and pending!

export const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(API)
      .then((response) => {
        setTimeout(() => {
          const projects = response.data;
          console.log("projects", projects);
          resolve(projects);
        }, 1000);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
