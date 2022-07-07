import { heroes, owners} from '../data/heroes';

console.log(heroes);
console.log(owners);


// const getHeroesById = (id) =>{
//     return heroes.find((heroes) => {
//         if(heroes.id === id){
//             return true;
//         }
//         else{
//             return false;
//         }
//     });
// } 
// 
// console.log(getHeroesById(2));

export const getHeroeById = (id) => heroes.find((heroes) => heroes.id === id); 

console.log(getHeroeById(2));

export const getHeroeByOwner = (owner) => heroes.filter((heroes) => heroes.owner === owner); 
console.log(getHeroeByOwner('Marvel'));
