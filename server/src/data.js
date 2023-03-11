// import fs from "fs";
// import path from "path";

// const __dirname = path.dirname(new URL(import.meta.url).pathname);

// const images = fs
//   .readdirSync(path.join(__dirname, "public/images"))
//   .filter((filename) => filename.endsWith(".png"))
//   .map((filename) => {
//     const data = fs.readFileSync(
//       path.join(__dirname, "public/images", filename),
//       {
//         encoding: "base64",
//       }
//     );
//     return `data:image/png;base64,${data}`;
//   });

// const data = [
//   {
//     userId: 1,
//     id: 1,
//     title: "Lorem ipsum dolor sit amet",
//     body: "this is test",
//     img: images[0],
//   },
//   {
//     userId: 2,
//     id: 2,
//     title: "Lorem ipsum dolor sit amet",
//     body: "this is another test",
//   },
// ];

// export default data;

// import fs from "fs";
// import path from "path";

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// // Import translation files
// import EN from "./translations/en.json" assert { type: "json" };
// import FR from "./translations/fr.json" assert { type: "json" };

// i18n
//   .use(initReactI18next) // Passes i18n down to react-i18next
//   .init({
//     lng: "en", // Default language
//     fallbackLng: "en", // Fallback language
//     debug: true, // Debug mode
//     resources: {
//       en: {
//         translation: EN, // English translations
//       },
//       fr: {
//         translation: FR, // French translations
//       },
//     },
//   });

// // Configure i18n module to use translation files from 'translation' folder
// i18n.configure({
//   locales: ["en", "fr"],
//   directory: new URL("./translation", import.meta.url).pathname.slice(1),
// });

// const __dirname = path.dirname(new URL(import.meta.url).pathname);

// const images = fs
//   .readdirSync(path.join(__dirname, "../public/images"))
//   .filter((filename) => filename.endsWith(".png"))
//   .map((filename) => {
//     const data = fs.readFileSync(
//       path.join(__dirname, "../public/images", filename),
//       {
//         encoding: "base64",
//       }
//     );
//     return `data:image/png;base64,${data}`;
//   });

// const data = [
//   {
//     userId: 1,
//     id: 1,
//     title: "Lorem ipsum dolor sit amet",
//     body: "this is test",
//     img: images[0],
//   },
//   {
//     userId: 2,
//     id: 2,
//     title: "Lorem ipsum dolor sit amet",
//     body: "this is test",
//     img: images[1],
//   },
//   {
//     userId: 3,
//     id: 3,
//     title: "Lorem ipsum dolor sit amet",
//     body: "this is test",
//     img: images[2],
//   },
// ];

// export default data;

import fs from "fs";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const imagesDirPath = path.join(__dirname, "../../../public/images");
let images = [];
if (fs.existsSync(imagesDirPath)) {
  images = fs
    .readdirSync(imagesDirPath)
    .filter((filename) => filename.endsWith(".png"))
    .map((filename) => {
      const data = fs.readFileSync(path.join(imagesDirPath, filename), {
        encoding: "base64",
      });
      return `data:image/png;base64,${data}`;
    });
}

const data = [
  {
    userId: 1,
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    body: "this is test1",
    img: images[0],
  },
  {
    userId: 2,
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    body: "this is test",
    img: images[1],
  },
  {
    userId: 3,
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    body: "this is test",
    img: images[2],
  },
];

export default data;

// This is for I18n testing
// import fs from "fs";
// import path from "path";

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// // Import translation files
// import EN from "./translations/en.json" assert { type: "json" };
// import FR from "./translations/fr.json" assert { type: "json" };

// // Configure i18n module to use translation files from 'translation' folder
// i18n.use(initReactI18next).init({
//   resources: {
//     en: {
//       translation: EN,
//     },
//     fr: {
//       translation: FR,
//     },
//   },
//   lng: "en",
//   fallbackLng: "en",
//   interpolation: {
//     escapeValue: false, // not needed for react as it escapes by default
//   },
//   react: {
//     useSuspense: false,
//   },
// });

// const __dirname = path.dirname(new URL(import.meta.url).pathname);

// const images = fs
//   .readdirSync(path.join(__dirname, "../public/images"))
//   .filter((filename) => filename.endsWith(".png"))
//   .map((filename) => {
//     const data = fs.readFileSync(
//       path.join(__dirname, "../public/images", filename),
//       {
//         encoding: "base64",
//       }
//     );
//     return `data:image/png;base64,${data}`;
//   });

// const title = i18n.t("hello");

// const data = [
//   {
//     userId: 1,
//     id: 1,
//     title,
//     body: "this is test",
//     img: images[0],
//   },
//   {
//     userId: 2,
//     id: 2,
//     title: i18n.t("Hello World!"),
//     body: "this is test",
//     img: images[1],
//   },
//   {
//     userId: 3,
//     id: 3,
//     title: i18n.t("Hello World!"),
//     body: "this is test",
//     img: images[2],
//   },
// ];

// export default data;

// import fs from "fs";
// import path from "path";

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// // Import translation files
// import EN from "./translations/en.json" assert { type: "json" };
// import FR from "./translations/fr.json" assert { type: "json" };

// const resources = {
//   en: {
//     translation: EN,
//   },
//   fr: {
//     translation: FR,
//   },
// };

// // Configure i18n module to use translation files from 'translation' folder
// i18n.use(initReactI18next).init({
//   resources,
//   lng: "en",
//   fallbackLng: "en",
//   interpolation: {
//     escapeValue: false, // not needed for react as it escapes by default
//   },
//   react: {
//     useSuspense: false,
//   },
// });

// const __dirname = path.dirname(new URL(import.meta.url).pathname);

// const images = fs
//   .readdirSync(path.join(__dirname, "../public/images"))
//   .filter((filename) => filename.endsWith(".png"))
//   .map((filename) => {
//     const data = fs.readFileSync(
//       path.join(__dirname, "../public/images", filename),
//       {
//         encoding: "base64",
//       }
//     );
//     return `data:image/png;base64,${data}`;
//   });

// function getData(lang) {
//   const data = [
//     {
//       userId: 1,
//       id: 1,
//       title: i18n.t("hello", { lng: lang }),
//       body: "this is test",
//       img: images[0],
//     },
//     {
//       userId: 2,
//       id: 2,
//       title: i18n.t("hello", { lng: lang }),
//       body: "this is test",
//       img: images[1],
//     },
//     {
//       userId: 3,
//       id: 3,
//       title: i18n.t("hello", { lng: lang }),
//       body: "this is test",
//       img: images[2],
//     },
//   ];

//   return data;
// }

// export { getData };
