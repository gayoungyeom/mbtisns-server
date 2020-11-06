require('dotenv').config();

const { ApolloServer, gql} = require('apollo-server-express');
const express = require('express');
// const { sendMessage } = require('./sendMessage');

const app = express();
const port = 3000;

const schema = require('./graphql/schemas');
const models = require('./models/index.js');

const server = new ApolloServer({
  schema,
});

server.applyMiddleware({
  app
});

app.get("/", (req, res) => {
    res.send("Hello world!");
});

models.sequelize.sync().then( () => {
  console.log("Connection has been established successfully.");
  //DB연결을 확인 후 서버 실행하는게 좋음
  app.listen(port, () => {
      console.log(`app is running at http://localhost:${port}`);
  });
  // sendMessage('01057584889', '45678');
}).catch(err => {
  console.log("Unable to connect to the database:");
  console.log(err);
})
