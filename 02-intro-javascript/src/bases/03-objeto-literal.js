console.log("hola mundo");

const persona = {
    nombre : "Alejo",
    apellido: "Gomez",
    edad: 36,
    direccion: {
        ciudad: "Cordoba",
        zip: 111111,
        lat: 23232323,
        lng: 45454545,
    }
}

const persona2 = { ...persona }; //crea persona2 copiando los valores y datos de la constante persona
persona2.nombre = "León";
persona2.apellido = "Gomez Centurión";
persona2.edad = 3;

console.log(persona);
console.log(persona2);
console.table(persona);