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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

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
  users.push(user)
  res.send( { result: 'success'} );
});

// OPERACIO DELETE ONE USER
app.delete("/user/:id", (req, res) => {
    const id = req.params.id
    users[id] = null
    users = users.filter((user)=>{
        return user
    })
    res.send({result: 'success'})
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
