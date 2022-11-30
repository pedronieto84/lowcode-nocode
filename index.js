
const express = require("express");

// Inicializacion Firestore Database
var passwords = require("./cert.json");
const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert(passwords),
});

const db = admin.firestore();

const app = express();
app.use(express.json());
const port = 3001;



// OPERACIONS CRUD

// OPERACIO READ ALL USERS
app.get("/users", async (req, res) => {
  const users = await db.collection('usuarios').get()
  const dataUsers = users.docs.map((d)=> d.data())
  res.send(dataUsers);
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
