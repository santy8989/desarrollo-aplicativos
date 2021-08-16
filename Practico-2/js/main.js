document.addEventListener("DOMContentLoaded", () => {
  getPerson();
})
let selected
let personas
let table = document.querySelector("#data-table");
let loading = document.querySelector("#loading");

async function getPerson() {
  table.innerHTML = ""
  loading.style.display="block"
  await fetch('https://610f5d459b698d0017175310.mockapi.io/api/v1/Personas').then(response => {
    response.json().then(resp => {
      personas = resp
      updateTable();
    })
  })
}

function buildPerson(type) {
  if (type == "add") {
    let persona = {
      nombre: document.querySelector("#name").value,
      apellido: document.querySelector("#lastname").value,
      direccion: document.querySelector("#adress").value,
      edad: document.querySelector("#age").value,
      titulo: document.querySelector("#degree").value,
      avatar: document.querySelector("#Avatar").value
    }
    addPerson(persona);
  } else {
    let persona = {
      nombre: document.querySelector("#editName").value,
      apellido: document.querySelector("#editLastname").value,
      direccion: document.querySelector("#editAdress").value,
      edad: document.querySelector("#editAge").value,
      titulo: document.querySelector("#editDegree").value,
      avatar: document.querySelector("#editAvatar").value
    }
    editPerson(persona)
  }
}

function updateTable() {
  loading.style.display="none"
  table.innerHTML = '<thead class="table-dark"><tr><th>ID</th><th></th><th>Nombre y apellido</th><th>Titulo</th><th>Dirección</th><th>Edad</th><th>Acción</th></tr></thead>'
  personas.map(persona => {
    table.innerHTML += '<tr><td>' + persona.id +
      '</td><td> <img src=' + '"' + persona.avatar + '" class="avatar"' + '</td><td>' + persona.nombre + ' ' + persona.apellido +
      '</td><td>' + persona.titulo +
      '</td><td>' + persona.direccion +
      '</td><td>' + persona.edad +
      '</td><td> ' + '<a onclick="deletePerson(' + persona.id + ')" class="btn btn-danger btn-sm" >' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">' +
      '<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>' +
      '<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>' +
      '</svg>' +
      '</a>' + '<a onclick="edit(' + persona.id + ')" class="btn btn-success btn-sm ml-4" >' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">' +
      '<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>' +
      '<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>' +
      '</svg>' +
      '</a>'
    '</td></tr>';
  })

}
async function addPerson(persona) {
  await fetch('https://610f5d459b698d0017175310.mockapi.io/api/v1/Personas', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(persona)
  }).then(response => {
    if (response.ok) {
      closeModal();
      getPerson();
    } else {
      throw new Error("no se agrego la persona")
    }
  })
}
async function deletePerson(id) {
  selected = id
  let selectedPerson = personas.filter(person => person.id == id);
  if (window.confirm("Seguro quiere eliminar a " + selectedPerson[0].nombre + " " + selectedPerson[0].apellido + " de la tabla?\n No puede deshacer esta acción.")) {
    await fetch('https://610f5d459b698d0017175310.mockapi.io/api/v1/Personas/' + id, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE',
    }).then(response => {
      if (response.ok) {
        getPerson();
      } else {
        throw new Error("no se pudo eliminar a la persona")
      }
    })
  } else return

}
async function editPerson(persona) {
  await fetch('https://610f5d459b698d0017175310.mockapi.io/api/v1/Personas/' + selected, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(persona)
  }).then(response => {
    if (response.ok) {
      closeModal();
      getPerson();
    } else {
      throw new Error("no se pudo editar a la persona")
    }
  })
}

function edit(id) {
  selected = id;
  openModal("edit")

}

function closeModal() {
  let divFondo = document.querySelector("#divFondo");
  document.body.removeChild(divFondo)
  let table = document.querySelector("#data-table");

}

async function openModal(type) {
  let selectedPerson = personas.filter(person => person.id == selected);
  let divFondo = document.createElement("div");
  divFondo.id = "divFondo"
  divFondo.className = "fondo"
  document.body.appendChild(divFondo)
  let divModal = document.createElement("div");
  divModal.id = "divModal"
  divModal.className = "modal"
  divModal.style.width = "400px"
  divFondo.appendChild(divModal)
  if (type != "edit") {
    await fetch("modalAdd.html").then(function (response) {
      return response.text();
    }).then(function (texto) {
      document.querySelector("#divModal").innerHTML = texto
    })
  } else {
    await fetch("modalEdit.html").then(function (response) {
      return response.text();
    }).then(function (texto) {
      document.querySelector("#divModal").innerHTML = texto
      document.querySelector("#editName").value = selectedPerson[0].nombre
      document.querySelector("#editLastname").value = selectedPerson[0].apellido
      document.querySelector("#editAdress").value = selectedPerson[0].direccion
      document.querySelector("#editAge").value = selectedPerson[0].edad
      document.querySelector("#editDegree").value = selectedPerson[0].titulo
      document.querySelector("#editAvatar").value = selectedPerson[0].avatar
    })
  }
}