console.log("hola mundo");
console.log("Segundo commit");
const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

let users = [
  {
    nombre: "Pedro",
  },
  {
    nombre: "Laura",
  },
  {
    nombre: "Lluis",
  },
];

// OPERACIONS CRUD

// OPERACIO READ ALL USERS
app.get("/users", (req, res) => {
  res.send(users);
});

// OPERACIO READ ONE USER
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  console.log("id", id);
  res.send(users[id]);
});

// OPERACIO CREATE ONE USER
app.post("/user", (req, res) => {
  const user = req.body;
  console.log("user", user);
  users.push(user);
  res.send({ result: "success" });
});

// OPERACIO UPDATE ONE USER AMB METODE PUT
app.put("/user/:id", (req, res) => {
  // Primero tengo que coger la id del usuario que quiero updatear
  const id = req.params.id;

  // Segundo tengo que coger el object json con la data que quiero modificar
  const userToUpdate = req.body;

  // Tengo que encontrar el elemento del array y substituirlo por el nuevo objeto que me viene del body
  users[id] = userToUpdate;

  res.send({ result: "success" });
});

// OPERACIO UPDATE ONE USER AMB METODE PATCH
app.patch("/user/:id", (req, res) => {
  // Primero tengo que coger la id del usuario que quiero updatear
  const id = req.params.id;

  // Segundo tengo que coger el object json con la data que quiero modificar
  const userToUpdate = req.body;
  const keys = Object.keys(userToUpdate)[0];

  // Primero cojo el objeto que habia antes
  const objectePrevi = users[id];

  objectePrevi[keys] = Object.values(userToUpdate)[0];
  // Si hay alguna propiedad nueva

  res.send({ result: "success" });
});

// OPERACIO DELETE ONE USER
app.delete("/user/:id", (req, res) => {
  const id = req.params.id;
  users[id] = null;
  users = users.filter((user) => {
    return user;
  });
  res.send({ result: "success" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
