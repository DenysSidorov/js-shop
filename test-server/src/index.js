const express = require("express");
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const app = express();

app.get("/test", (req, res) => {
  res.send("Our api server is working correctly");
});

app.listen(PORT, () => {
  console.log("Started api service on port - ", PORT);
  console.log("Main app's host is - ", HOST);
});
