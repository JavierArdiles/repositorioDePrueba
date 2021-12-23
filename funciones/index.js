const primerosTres = function (array) {
    if (array.length < 3) console.log('El array pasado debe tener al menos 3 elementos');
    else return [array[0], array[1], array[2]];

    // let arr = [];
    // for(let i = 0; i < 3; i++){
    //     arr.push(array[i]);
    // }
    // return arr;
}

const crearObjeto = function (name, surname, age, profession) {
    return {
        name,
        surname,
        age,
        profession
    }
}

const obtenerLargo = function (array) {
    return array.length;
}

const obtenerCuadrados = function (array) {
    // return array.map(el => Math.pow(el, 2));
    function mapa(el){
        return Math.pow(el, 2);
    }
    return array.map(mapa(el))
    // let cuadrados = [];
    // for(let i = 0; i < array.length; i++){
    //     let cuadrado = Math.pow(array[i], 2);
    //     cuadrados.push(cuadrado);
    // }
    // return cuadrados;
}

const agregarAlFinal = function (array, element) {
    array.push(element);
    return array;
}

const preguntarSiContiene = function (array, number) {
    return array.includes(number);
}

const saludarEnIdioma = function (name, language) {
    switch (language) {
        case 'español':
            return 'Hola ' + name + ', que tengas un lindo día';
        case 'ingles':
            return 'Hello ' + name + ', have a nice day';
        case 'portugues':
            return 'Oi '.concat(name).concat(', tenha um bom dia');
        case 'frances':
            return `Salut ${name}, bonne journée`;
        default:
            console.log('El idioma elegido debe ser español, ingles, portugues o frances');
    }
}

module.exports = {
    primerosTres,
    crearObjeto,
    obtenerLargo,
    obtenerCuadrados,
    agregarAlFinal,
    preguntarSiContiene,
    saludarEnIdioma,
}
