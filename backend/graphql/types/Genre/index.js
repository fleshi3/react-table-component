const Genre = `
        type Genre {
                id: String!
                name: String
        }
        type Query {
                genre(id: String): [Genre]
                genres: [Genre]
        }
`;

module.exports = Genre;
