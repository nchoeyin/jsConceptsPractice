// function rollDie(numSides){
//     return Math.floor(Math.random()*numSides) + 1;
// }
// num = parseInt(prompt("Enter the number: "));
// console.log(rollDie(num));
//output : 3

// function multiply(a,b){
//     b = typeof b!== 'undefined' ? b:1;
//     return a*b;
// }
// console.log(multiply(5));
// output : 

// function rollDie(numSides) {
//      if(numSides === undefined) {
//          numSides = 6;
//      }
//     return Math.floor(Math.random() * numSides) + 1;
// }
// console.log(rollDie(20));
//output : 13
// New way of giving the default value

// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides);
// }
// console.log(rollDie());
// output : 0, 5,6

// function greet (msg = "Enter yo name", person)
// {
//     console.log(`${msg}, ${person}`);
// }
// console.log(greet("Joaquin"));
// output : Joaquin, undefined

// function greet (msg, person="jr")
// {
//     console.log(`${msg}, ${person}`);
// }
// console.log(greet("Joaquin"));
 

//----------------------------------------------------------------------------------------------------------------------------------------
// SPREAD usage 
//SPREAD IN FUNCTION CALLS

 //console.log(Math.min(15,23,10,45,12)); // 15
//const nums = [13,4,5,21,3,3,31,5,7,6,54];
//  console.log(Math.max(nums)); // NaN

//SPREAD in array literals

// console.log(Math.max(...nums)); // output : 54
//console.log(..."hello"); //output : h e l l o
// const cat = ['Blue','Scout','Rocket'];
// const dog = ['rusty','Wyatt'];

// const allPets = [...cat, ...dog];
// console.log(allPets);
// //output : 5) ['Blue', 'Scout', 'Rocket', 'rusty', 'Wyatt']

// const allPets = [...dog,...cat];
// console.log(allPets);
//output : (5) ['rusty', 'Wyatt', 'Blue', 'Scout', 'Rocket']

//SPREAD in object literals 
// const feline = {legs : 4, family : 'felidae'};
// const canine = {family: 'Caninae', furry : true};
// const dog = {...canine,isPet : true};
// console.log(dog);
// console.log(canine);
// console.log(feline);
// // output
// {family: 'Caninae', furry: true, isPet: true}
// {family: 'Caninae', furry: true}
// {legs: 4, family: 'felidae'}


//-----------------------------------------------------------------------------------------------------------------
//Rest params
// function sumAll() {
//     let total = 0;
//     for(let i = 0; i< arguments.length;++i)
//     {
//         total += arguments[i];
//     } 
//     return total;
// }
// console.log(sumAll(8,4,3,2));
// output : 17

// function sum(){
//     console.log(arguments);
// }
// sum(8,4,5,2);
// output
//{  "0": 8, "1": 4, "2": 5,"3": 2}

// function sum(...nums) {
//     return nums.reduce((total,el) => total + el);
// }
// console.log(sum(1,2,3,4,5,6,7,8,9,10));
// output : 55

//---------------------------------------------------------------------------------------------------------------------------------
//DESTRUCTURING ARRAYS 

// const raceResults = ["Usian Bolt", "Tyson Gay", "Yohan Blake","Asafa Powell","Cheng"]
// const {gold, silver, bronze, ...participants} = raceResults;
// console.log(gold);
//output : undefined

// In console, Its working  
//const race = ["India", "China","Usa"] 
// undefined
// const [gold,silver,bronze] = race;
// undefined
// const race = ["India", "China","Usa","Japan", "Pakistan"] 
// undefined
// const [gold,silver,bronze,...rest] = race;
// undefined

//DESTRUCTURING FROM OBJECTS
const user = {
    email : 'harvey@gmail.com',
    firstName : "Harvey",
    lastName : "Milk",
    city : "San Francisco",
    bio : "harvey Milk was an american ppolitician",
    born : 1959,
    died : 2045

}
//const {email, firstName, lastName, city, bio} = user;
// console.log(email);
// output : harvey@gmail.com
//console.log(firstName);
// output : Harvey
// const {born : birthYear, died : deathYear} = user;
// console.log(birthYear);
// output : 1959 

// //DESTRUCTURING PARAMS
function fullName({firstName, lastName})
{
    return `${firstName} ${lastName}`
}
console.log(fullName(user));
output : Harvey Milk