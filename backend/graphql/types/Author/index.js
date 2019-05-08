const Author = `
        type Author {
                id: String
                first_name: String
                family_name: String
        }
        type Query {
                author(id: String!): Author
                authors: [Author]
        }
`;

module.exports = Author;
