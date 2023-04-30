const btnAmigos = document.querySelector("#boton")
const ulAmigos = document.querySelector("#lista")

function mostrarAmigos() {

    ulAmigos.innerHTML = " "
    fetch(`http://localhost:3000/amigos`)
        .then(res => res.json())
        .then(function(amigos){
            for( let i = 0; i < amigos.length ; i ++){
                let li = document.createElement('li')
                li.innerText = amigos[i].name
                ulAmigos.append(li)
            } 
        })
    }

btnAmigos.addEventListener("click", mostrarAmigos)

//buscar amigo por id

const inputAmigo = document.querySelector("#input")
const btnSearch = document.querySelector("#search")
const spanAmigo = document.querySelector("#amigo")

btnSearch.addEventListener("click", function(e){
    let idAmigo = inputAmigo.value
    inputAmigo.value = " "
    $.get(`http://localhost:3000/amigos/${idAmigo}`, function(amigo){
        spanAmigo.innerHTML = amigo.name
    })
})

 

//borrar amigo
const inputDelete = document.querySelector("#inputDelete")
const btnBorrar = document.querySelector("#delete")
const idSucces = document.querySelector("#success")

btnBorrar.addEventListener("click", function() {
     let idAmigo = inputDelete.value
    
    fetch(`http://localhost:3000/amigos/${idAmigo}`,{
        method: "DELETE"
    })
    .then(res => res.json())
        .then(()=> {
            idSucces.innerText = `El amigo ${idAmigo} fue eliminado correctamente`
          mostrarAmigos()
        });
      });













   
    
  

    





