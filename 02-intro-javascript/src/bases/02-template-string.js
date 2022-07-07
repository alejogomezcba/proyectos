console.log("hola mundo");

const nombre = "Alejo";
const apellido = "Gomez";
const nombreCompleto = `${ nombre } ${ apellido }`;

console.log(`Mi nombre completo es ${ nombre } ${ apellido }`);

function saludo(nombre){
    return `Hola ${ nombre }`
};

console.log(`Este es un ejemplo de saludo ---> ${ saludo(nombreCompleto) }`);