const express = require("express");
const fetch = require("node-fetch");

const app = express();


//revoir le code 
app.get("/", async (req, res) => {
  try {
    const response = await fetch("http://backend:3000/api"); 
    const data = await response.json();
    res.send(`
      <h1>Frontend connecté !</h1>
      <p>Message du backend : ${data.message}</p>
    `);
  } catch (error) {
    console.error("Erreur de connexion au backend :", error);
    res.send("<h1>Erreur de connexion au backend</h1>");
  }
});

app.listen(8080, () => {
  console.log("Frontend running on port 8080");
});
