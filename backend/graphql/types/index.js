const {mergeTypes} = require('merge-graphql-schemas');

// import types
const Author = require('./Author');
const Book = require('./Book');
const Genre = require('./Genre');

const typeDefs = [Author, Book, Genre];

module.exports = mergeTypes(typeDefs, {all: true});
