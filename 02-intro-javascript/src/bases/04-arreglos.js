const arreglo = [1,2,3,4]; 

const arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function(numero){
return numero * 2;
}) // se crea la constante arreglo3, generando un nuevo array tomando los datos de la constante arreglo2, y multiplicando los valores por 2


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);