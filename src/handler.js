const books = require("./books");
const { nanoid } = require("nanoid");
const addBookHandler = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;
  if (name === undefined) {
    const response = h
      .response({
        status: "fail",
        message: "Gagal menambahkan buku. Mohon isi nama buku",
      })
      .code(400);
    return response;
  } else if (readPage > pageCount) {
    const response = h
      .response({
        status: "fail",
        message:
          "Gagal menambahkan buku, readPage tidak boleh lebih besar dari pageCount",
      })
      .code(400);
    return response;
  } else {
    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const finished = pageCount === readPage;
    const newBook = {
      id,
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      finished,
      reading,
      insertedAt,
      updatedAt,
    };
    books.push(newBook);
    const isSuccess = books.some((book) => book.id === id);
    if (isSuccess) {
      const response = h
        .response({
          status: "success",
          message: "Buku berhasil ditambahkan",
        })
        .code(201);
    }
    return response;
  }
};
module.exports = addBookHandler;