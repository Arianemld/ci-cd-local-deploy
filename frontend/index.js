const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Frontend is running!</h1>");
});

app.listen(8080, () => {
  console.log("Frontend running on port 8080");
});

