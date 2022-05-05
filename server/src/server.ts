import express from "express";

const app = express();

app.get("/users", (req, res) => {
  return res.send("Hello World");
});
//http://localhost:3333/users

app.listen(3333, () => {
  console.log("HTTP server running!");
});
