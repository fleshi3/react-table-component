const BookInstance = `
        scalar Date
        type BookInstance {
                id: String!
                book: Book
                imprint: String                
                status: String
                due_back: Date
        }
        type Query {
                bookInstance(id: String!): [BookInstance]
                bookInstances: [BookInstance]
        }
`;

module.exports = BookInstance;
