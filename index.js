const { ApolloServer, gql} = require('apollo-server-express');
const express = require("express");

const app = express();
const port = 3000;

const schema = require('./graphql/schemas');
const models = require("./models/index.js");

const server = new ApolloServer({
  schema,
});

server.applyMiddleware({
  app
});

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.listen(port, () => {
    console.log(`app is running at http://localhost:${port}`);
});

models.sequelize.sync().then( () => {
  console.log("Connection has been established successfully.");
}).catch(err => {
  console.log("Unable to connect to the database:");
  console.log(err);
})
