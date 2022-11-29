
// Donde pone pedro-4410f pon tu proyecto
// Donde pone usuarios pon tu coleccion
fetch('https://firestore.googleapis.com/v1/projects/eliminarlo2/databases/(default)/documents/usuarios')
  .then(response => response.json())
  .then(data => {
    console.log('data', data)

    const documents = data.documents
    console.log('documents', documents)

    const usersFields = documents.map((doc) => {
        return doc.fields
    })
    console.log('usersFields', usersFields);

    const users = usersFields.map((userFields) => {

        // Cojo las keys
        const keys = Object.keys(userFields)
        console.log('keys', keys)

        // Cojo los values
        const values = keys.map((eachKey)=>{
            return Object.values(userFields[eachKey])
        })
        const user = {}  
        keys.forEach((key, index)=>{
            user[key] = values[index][0]
        })
        return user
    })

    console.log('users', users)
    return users
  })
  .then((users)=>{
    console.log('users', users)
    addTitle()
    addList(users)
  })

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

function addList(users){
  // Creo un elemento UL
  const ul = document.createElement("ul");

  // Itero sobre cada usuario
  users.forEach((user)=>{

    // En cada usuario creo un elemento LI y le añado el nombre
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(user.nombre));

    // Añado el elemento LI al elemento UL
    ul.appendChild(li);
  })
  

  // Lo inserto al DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(ul, currentDiv);
}


