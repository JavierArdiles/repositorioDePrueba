const funciones = require('./funciones');

// const primeros3 = funciones.primerosTres;
// const crearObj = funciones.crearObjeto;
// const obtenerLar = funciones.obtenerLargo;
// const obtenerCuad = funciones.obtenerCuadrados;
// const agregarFinal = funciones.agregarAlFinal;
// const contiene = funciones.preguntarSiContiene;
const saludo = funciones.saludarEnIdioma;

// console.log(primeros3([34, 'hola', {nombre: 'Javier', edad: 25}, 'chau']));
// console.log(primeros3([]));
// console.log(crearObj('Javier', 'Ardiles', 25, 'Programador'));
// console.log(obtenerLar([1, 'asd', true, 56]));
// console.log(obtenerCuad([3, 5, 23, 89, 100]));
// console.log(agregarFinal([1, 2, 3, 4, 5], 'esto es un string'));
// console.log(contiene([1, 2, 3, 4, 5], 4));
// console.log(contiene([1, 2, 3, 4, 5], 6));
console.log(saludo('Javier', 'portugues'));
// console.log(saludo('Javier', 'aleman'));

function asd(arg){
    let asd = 'asd';
    console.log('Estoy ejecutandome pero no retorno nada entonces voy a retornar undefined');
}
console.log(asd());