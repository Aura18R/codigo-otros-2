var formulario = document.querySelector(".formulario"); //seleccionamos con el dom a formulario


/* Funcion que lee los valores ingresados en el formulario y los valida para asi agregarlos a la lista de invitados */
formulario.onsubmit = function(e) {
  e.preventDefault();
  
  /* asigna variables a los valores del formulario segun su posicion */
  var nombre = formulario.elements[0].value;
  var edad = formulario.elements[1].value;
  var i = formulario.elements[2].selectedIndex; 
  var nacionalidad = formulario.elements[2].options[i].value;


  console.log(nombre, edad); /* imprimimos los valores para ver que esta guardando */
  console.log(nacionalidad);

 /* Realiza unas condiciones ya que a su fiesta solo pueden ir invitados mayores de edad y poner su nombre, si se cumple lo anterior se ejecuta la funcion agregar invitado */

  if (nombre.length === 0) {
    formulario.elements[0].classList.add("error"); /* Si no cumple con la condicion cambiara los estilos del elemento a los que esten en la clase error */
  }
  
  if (edad < 18 || edad > 120) {
    formulario.elements[1].classList.add("error");
  }

  if (nombre.length > 0 && (edad >= 18 && edad <= 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
}

/* Funcion que agrega a los invitados con los parametros nombre, edad y nacionalidad */
function agregarInvitado(nombre, edad, nacionalidad) {

  /* Creamos la lista de invitados */
  var lista = document.getElementById("lista-de-invitados"); /* traemos la lista de invitados */
  var elementoLista = document.createElement("li"); /* creamos un listitem */
  elementoLista.classList.add("elemento-lista"); /* agregamos el elmento de la lista a la calse elemnto-lista para que adopte los estilos que se definieron para esa clase */
  lista.appendChild(elementoLista); /* a lista le agregamos el hijo elemento de la lista */

  function crearElemento(descripcion, valor) { 
    var spanNombre = document.createElement("span"); /* Creamos los elementos */
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": "; /* Ponemos los valores */
    inputNombre.value = valor; 
    elementoLista.appendChild(spanNombre); /* Hcemos el append a elemento lista */
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }
  
  /* Instanciamos la funcion crearElemento para los datos de la tarjeta */
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);


  /* Boton borrar */
  var botonBorrar = document.createElement("button"); /* Creamos el elemento */
  botonBorrar.textContent = "Eliminar invitado"; /* Le ponemos un texto al boton */
  botonBorrar.id = "boton-borrar"; /* Le ponemos un id */
  var corteLinea = document.createElement("br"); /* Creamos un salto de linea */
  elementoLista.appendChild(corteLinea); 
  elementoLista.appendChild(botonBorrar);


  /* Funcion que borra al clickear boton borrar */
  botonBorrar.onclick = function() {
    botonBorrar.parentNode.remove();
  }
}