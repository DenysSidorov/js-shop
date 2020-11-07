const express = require("express");
const { HOST, PORT } = require("./configuration");
const { connectDb } = require("./helpers/db");
const { saveUser } = require("./models/User");
const app = express();

app.get("/test", (req, res) => {
  res.send("Our api server is working correctly!!!!");
});

const startServer = () => {
  app.listen(PORT, () => {
    console.log("Started api service on port - ", PORT);
    console.log("Main app's host is - ", HOST);

    saveUser({name: 'TestUser', age: 56});

  });
};

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);
