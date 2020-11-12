const express = require("express");
const axios = require("axios");
const { HOST, PORT, API_URL } = require("./configuration");
const { connectDb } = require("./helpers/db");
const app = express();

app.get("/test", (req, res) => {
  res.send("Our auth server is working correctly!!!!");
});

app.get("/api/currentUser", (req, res) => {
  res.json({
    id: "1234",
    email: "foo@gmail.com"
  });
});

app.get("/test-with-api-data", (req, res) => {
  axios.get(API_URL + "/testapidata").then(response => {
    res.json({
      testapidata: response.data.testapidata
    });
  });
});

const startServer = () => {
  app.listen(PORT, () => {
    console.log("Started api service on port - ", PORT);
    console.log("Main app's host is - ", HOST);
  });
};

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);
