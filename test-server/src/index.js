const express = require("express");
const axios = require("axios");
const { HOST, PORT, AUTH_API_URL } = require("./configuration");
const { connectDb } = require("./helpers/db");
const { saveUser } = require("./models/User");
const app = express();

app.get("/test", (req, res) => {
  res.send("Our api server is working correctly!!!!!!");
});

app.get("/test-with-current-user", (req, res) => {
  axios.get(AUTH_API_URL + "/currentUser").then(response => {
    res.json({
      testwithcurrentuser: true,
      currentUserFromAuth: response.data
    });
  });
});

app.get("/api/testapidata", (req, res) => {
  res.json({
    testapidata: true
  });
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
