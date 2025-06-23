const express = require("express");
const { exec } = require("child_process");
const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log("Webhook triggered!");
  exec("docker-compose down && docker-compose pull && docker-compose up -d", (err, stdout, stderr) => {
    if (err) {
      console.error("Deployment failed:", stderr);
      return res.sendStatus(500);
    }
    console.log("Deployment succeeded:", stdout);
    res.sendStatus(200);
  });
});

app.listen(3001, () => console.log("Listening on port 3001"));

