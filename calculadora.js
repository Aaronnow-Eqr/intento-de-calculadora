// Ejercicio de POE
// Realizar una calculadora que permita sumar, restar, 
// multiplicar y dividir dos números ingresados por el usuario a través de un formulario.
// El formulario debe contar con un botón para limpiar sus campos.
// El resultado debe de desplegarse en un tercer input con propiedad readonly.
// Si el usuario intenta enviar el formulario sin ingresar los dos números, 
// mostrar un mensaje de error (*) indicando que todos los campos son obligatorios.
// El estudiante tiene total libertad para definir 
// como recolectará los datos que definan el tipo de operación a realizar.

// (*) Los mensajes de error se pueden mostrar con alert, 

let pantalla = document.getElementById('operacion');

function añadiraPantalla(valor) {
  pantalla.value += valor;
}

function calcular() {
  pantalla.value = eval(pantalla.value);
}

function limpiar() {
  pantalla.value = '';
}

function borrar() {
  pantalla.value = pantalla.value.slice(0, -1);
}

document.querySelectorAll("#calculadora button").forEach(boton => {
  boton.addEventListener("click", () => {
    let textoBoton = boton.textContent.trim();
    if (!isNaN(textoBoton) || ["+", "-", "*", "/"].includes(textoBoton)) {
      añadiraPantalla(textoBoton);
    } else if (textoBoton === "=") {
      calcular();
    } else if (textoBoton === "C") {
      limpiar();
    } else if (textoBoton.includes("x]")) {
      borrar();
    }
  });
});