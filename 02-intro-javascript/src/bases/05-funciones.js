
const saludo = function (nombre){
    return `Hoy saludamos a ${nombre}`;
} // función simple

const saludo2 = (nombre) => {
    return `Hoy saludamos a ${nombre} usando función flecha`;
} // arrow function

const saludo3 = () => `Hacemos un saludo con una función flecha sin datos de entrada`; // arrow function simplificada sin datos
const saludo4 = (nombre) => `Hoy saludamos a ${nombre} con función flecha y datos de entrada`; // arrow function simplificada con datos

console.log(saludo('Leon'));
console.log(saludo2('Leon'));
console.log(saludo3('Leon'));
console.log(saludo4('Leon'));

const getUser = () => ({
uid: 123456,
username: "testuser",
});

console.log(getUser());

//tarea 
// 1 - convertir a arrow function
// 2 - tienen que devolver un objeto implícito
// 3 - pruebas.

function getUsuarioActivo(nombre){
    return {
        uid: 56789,
        nombre: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Alejo');

console.log(usuarioActivo);

// resolucion
const getUsuarioActivo2 = (nombre) => ({uid: 12313123, nombre: nombre});
console.log(getUsuarioActivo2("Ana"));