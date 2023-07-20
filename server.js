const express = require("express")
const {ApolloServer,gql} =  require("apollo-server-express")
const resolvers = require('./resolvers');
const typeDefs =  require('./typeDefs');
const mongoose = require('mongoose')

async function startServer() {
  const app =  express();
  const apolloServer  = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();

  apolloServer.applyMiddleware({app: app});
  app.use((req, res) =>{
    res.send('hello from express apollo server')
  });

  await mongoose.connect('mongodb://0.0.0.0:27017/GraphQLDemo',{
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

//   const uri = "mongodb://0.0.0.0:27017/";
// const client = new MongoClient(uri);

  console.log("mooongose connect //////.....")
  app.listen(4000, ()=> console.log("server is running on 4000"));
}

startServer();