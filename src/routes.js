const addBookHandler = require("./handler");
const routes = [
  {
    method: "GET",
    path: "/",
    handler: async (request, h) => {
      return "Hello World!";
    },
  },
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "GET",
    path: "/books/",
    handler: getAllBooksHandler,
  },
];
module.exports = routes;