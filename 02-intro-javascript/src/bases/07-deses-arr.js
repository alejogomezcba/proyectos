console.log("hola mundo");

const personajes = ['Goku','Vegeta','Trunks'];
const [ , , p3] = personajes;

console.log(p3);

const retornaArreglo = () =>{
    return [
        'ABC',
        12345
    ]
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const funcArr = (valor) =>{
    return [valor, ()=>{console.log('Hola mundo dentro del array');}];
}

const arr = funcArr('Goku');
console.log(arr);
arr[1](); // Ejecuta el 'Hola mundo dentro del array'



// tarea
//Primer valor del array nombre
//segundo valor setNombre

const funcArr2 = (valor) =>{
    return [valor, ()=>{console.log('Hola mundo dentro del array');}];
}
const [name, setName] = funcArr2('Goku');
setName();