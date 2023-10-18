const {
  insertBook, updateBookById, deleteBookById, getAllbooks, getBookById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: insertBook,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllbooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookById,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: updateBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookById,
  },
];
module.exports = routes;
