/*function funcName() {
    yourName = prompt("Whats your name? ");
    console.log(`Your name is ${yourName} ryt?`);
}
funcName();
function rant(message)
{
    for(let i = 0; i< 3; i++)
    {
        return(message.toUpperCase());
    }
}
console.log(rant('FreeTibet!'));

function yourName(fn,ln)
{
    console.log(`Your first Name : ${fn} and your last name : ${ln} `);
}
console.log('Enter your full name');
let fullName = prompt(); 
const[first,last] = fullName.split(' ');
yourName(first, last);


let totalEggs = 0;
function collectEggs() {
    totalEggs = 6;
    return totalEggs;
}
console.log(collectEggs()); // returns 6
 */

// Lexical scope
/*
function bankRobbery() 
{
    const heroes = ['Spiderman','Wolverine','BlackPanther'];
    function cryForHelp()
    {
        for(let hero of heroes)
        {
            console.log(`Please help, ${hero.toUpperCase()}`);
        }
    }
    cryForHelp();
}
bankRobbery();

const add = function(x,y)
{
    return x+y;
}
console.log(add(4,10));

//Passing functions as parameters

function callTwice()
{
    f();
    f();
}
const f = function() {
    const roll = Math.floor(Math.random()*6+1);
    console.log(roll);
}
callTwice(f);

//2nd example
const railwayStation = function() {
    let trainName =  prompt("Which is your Train? ");
    console.log(`Your train is ${trainName}`);
}
function callTimes(n){
    for(let i = 0; i< n; i++)
    {
        railwayStation();
    }
}

let numberOfTimes = prompt("Enter how many times do you want to take input: ");
callTimes(numberOfTimes);
*/
/* 
Output: Your train is Dorondo express
        Your train is Rajdhani Express
        Your train is Tuticorin Express
        Your train is Chennai Express
        Your train is Tipu Express
        */

//Returning a function
/*
function makeMysteryFunc() {
    const rand = Math.random();
    if(rand>0.5)
    {
        return function(){
            console.log("Its greater than 0.5");
        };
    }
    else
        return function() {
            alert("Its less than 0.5");
        }
}
const main = makeMysteryFunc();
main();

function makeBetweenFunc(min,max)
{
    return function(num)
    {
        return num > min && num < max;
    }
}
function (num) 
{
    return num >= min && num <=max;
}
const t = makeBetweenFunc(0,18);
t(50);

*/
//defining methods
/*
const myMaths = {
    PI : 3.14159,
    square : function(num) {
        return Math.pow(num,2);
    },
    cube : function(num) {
        return Math.pow(num,3);
    }
}
console.log(myMaths.PI);
console.log(myMaths["cube"](4));

const square = {
    area(side) {
        return Math.pow(side,2);
    },
    perimeter(side) {
        return 4*side;
    }
}
alert(square["area"](15));
*/
/*
const salary = {
    dearnessAllowance : 30,
    housingAllowance : 5,
    dailyAllowance : 10
}
const da = salary.dearnessAllowance;
const ha = salary.housingAllowance;
let daily = salary.dailyAllowance;
console.log(`Your dearnes allowance is ${da}, housing allowance is ${ha} and your daily allowance is ${daily}`);
//Output: Your dearnes allowance is 30, housing allowance is 5 and your daily allowance is 10
*/
//Illustratioin of this keyword
/*
const dog = {
    name : "Jammu",
    woof(){
        console.log(`${dog.name} says WOOOF`);
    }
}
const meow2 = dog.woof;
meow2();
//Output : Jammu says WOOOF
*/
const cat = {
    name : "Blue steele",
    color: "grey",
    breed : "Scottish fold",
    meow() {
        console.log(`${this.name} says MEWOW`);
    }
}
const meow2 = cat.meow;
cat.meow();