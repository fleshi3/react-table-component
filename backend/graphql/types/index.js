const {mergeTypes} = require('merge-graphql-schemas');

// import types
const Author = require('./Author');
const Book = require('./Book');
const Genre = require('./Genre');
const BookInstance = require('./BookInstance');

const typeDefs = [Author, Book, Genre, BookInstance];

module.exports = mergeTypes(typeDefs, {all: true});
