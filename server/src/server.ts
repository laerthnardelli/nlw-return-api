import express from "express";

const app = express();

//GET = Buscar informações
//POST = Cadastrar informações
//PATCH = Atalizar uma informação única de uma entidade
//DELETE = Deletar uma informção

app.get("/users", (req, res) => {
  return res.send("Hello World");
});
//http://localhost:3333/users

app.listen(3333, () => {
  console.log("HTTP server running!");
});
