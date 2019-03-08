
const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        breweries: [Brewery]!
        #Get a brewery by ID
        brewery(id: ID!): Brewery

        #Get a brewery by name
        breweriesByName(name: String!): [Brewery]

        #Get a list of breweries by state
        breweriesByState(state: String!): [Brewery]

        #Get a list of breweries by tag
        breweriesByTag(tag: String!): [Brewery]
    }

    type Brewery {
        id: ID!
        name: String
        type: String
        street: String
        city: String
        state: String
        postal: String
        country: String
        latitude: String
        longitude: String
        phone: String
        url: String
        tags: [String]
    }

    type User {
        id: ID!
        email: String!
        favorites: [Brewery]
        visited: [Brewery]
        beers: Int
    }

    type RequestResponse {
        errors: [String]
        success: Boolean
    }

    type Mutation {
        #Add a favorite brewery
        addFavorite(id: ID!): RequestResponse

        #Remove a favorite brewery
        removeFavorite(id: ID!): RequestResponse

        #Add a visited brewery
        addVisited(id: ID!): RequestResponse

        #Add number of beers drank at brewery
        addBeers(beers: Int!): Int

        #Login to track your alcoholism
        login(email: String): String
    }
`;

module.exports = typeDefs;
