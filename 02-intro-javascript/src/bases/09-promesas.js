import {getHeroeById} from './bases/08-imp-exp';
import { heroes } from '../data/heroes';

console.log("hola mundo");

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //console.log("Promesa luego de 2 segundos");
//     const p1 = getHeroeById(2);
//     resolve(p1);
//     //reject('No se pudo encontrar el Héroe');
//   }, 2000);
// });

// promesa.then((heroe) => {
//   console.log('heroe', heroe);
// }).catch( err => console.warn(err));

const getNewHeroById = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
          //console.log("Promesa luego de 2 segundos");
          const p1 = getHeroeById(id);
          if(p1){
            resolve(p1);
          }
          else{
            reject('No se pudo encontrar el Héroe');
          }
        }, 2000);
      });
}

getNewHeroById(2).then(console.log).catch(console.warn)