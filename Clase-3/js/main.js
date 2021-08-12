document.addEventListener("DOMContentLoaded", ()=> {
        getPerson(); 
})
let personas = [];
let table =  document.querySelector("#tabla");
async function getPerson() {
    await fetch('https://610f5d459b698d0017175310.mockapi.io/api/v1/Personas').then(response => {
        response.json().then(resp => {
            personas=resp
              resp.map(persona => {
                table.innerHTML += "<tr><td>"+persona.nombre+"</td>"+"<td>"+persona.edad+"</td>"+"<td>"+persona.direccion+"</td></tr>";
              })
        })
    })
}