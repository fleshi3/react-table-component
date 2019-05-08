const Book = `
        type Book {
                id: String!
                title: String
                summary: String
                author: Author
                isbn: String
                genre: Genre
        }
        type Query {
                book(id: String!): [Book]
                books: [Book]
        }
`;

module.exports = Book;
