// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];

function agregarAmigo() {
    //Capturar el valor del campo de entrada
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();
    
    //Validar la entrada
    if (nombre === '') {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    //Actualizar el array de amigos
    listaDeAmigos.push(nombre);

    //Limpiar el campo de entrada
    input.value = '';

    //Mostrar la lista actualizada en consola
    console.log(listaDeAmigos);

      mostrarLista();

}

     //Funcion de Mostrar la lista
function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let amigo of listaDeAmigos) {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

