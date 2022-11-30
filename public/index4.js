fetch("https://us-central1-eliminarlo2.cloudfunctions.net/api/users")
  .then((response) => response.json())
  .then((data) => {
    console.log("data", data);
    return data;
  })
  .then((users) => {
    console.log("users", users);
    addTitle();
    addList(users);
  });

function addTitle() {
  // Creo un DIV element
  const newDiv = document.createElement("div");

  // Le pongo un título
  const newContent = document.createTextNode("Listado de Usuarios");
  newDiv.appendChild(newContent);

  // Lo inserto al DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

function addList(users) {
  // Creo un elemento UL
  const ul = document.createElement("ul");

  // Itero sobre cada usuario
  users.forEach((user) => {
    // En cada usuario creo un elemento LI y le añado el nombre
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(user.nombre));

    // Añado el elemento LI al elemento UL
    ul.appendChild(li);
  });

  // Lo inserto al DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(ul, currentDiv);
}
