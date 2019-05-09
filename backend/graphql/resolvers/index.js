// Schemas
const Author = require('../../models/author');
const Book = require('../../models/book');
const Genre = require('../../models/genre');
const BookInstance = require('../../models/bookinstance');

const resolvers = {
  Query: {
    author: (root, args) => {
      return new Promise((resolve, reject) => {
        Author.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    authors: () => {
      return new Promise((resolve, reject) => {
        Author.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    },
    book: (parent, args) => {
      return new Promise((resolve, reject) => {
        Book.find({_id: args.id}).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    books: () => {
      return new Promise((resolve, reject) => {
        Book.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    },
    genre: (parent, args) => {
      return new Promise((resolve, reject) => {
        Genre.find({_id: args.id}).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    genres: () => {
      return new Promise((resolve, reject) => {
        Genre.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    },
    bookInstance: args => {
      return new Promise((resolve, reject) => {
        BookInstance.find({_id: args.id}).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    bookInstances: () => {
      return new Promise((resolve, reject) => {
        BookInstance.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    },
  },
  Book: {
    author: parent => {
      return new Promise((resolve, reject) => {
        Author.findOne(parent.author).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    genre: parent => {
      return new Promise((resolve, reject) => {
        Genre.findOne(parent.genre).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
  },
  BookInstance: {
    book: parent => {
      return new Promise((resolve, reject) => {
        Book.findOne(parent.book).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
  },
};

module.exports = resolvers;
