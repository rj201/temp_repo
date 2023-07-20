const {gql} =  require("apollo-server-express")
const typeDefs = gql `

    type Post {
        id: ID,
        title: String,
        desc: String
    }
    type Query {
        hello : String
        hello1: String
        getAllPosts: [Post]
    }

    input PostInput {
        title: String
        desc: String
    }

    type Mutation {
        createPost(post: PostInput) : Post
    }
`;

module.exports = typeDefs