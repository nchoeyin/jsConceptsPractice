//foreach demostration
/*
const num = [1,2,3,4,5,6,7,8,9,10]
const squareNum = num.forEach(function(n){
    console.log(n*n);    
});
squareNum();


const num = [1,2,3,4,5,6,7,8,9,10]
const evenNo = num.forEach(function(n){
    if(n%2==0)
     {
         console.log(n);
     }
})
*/
/* output
2
4
6
8
10*/
/*
num = [1,2,3,4,5,6,7,8,9,10]
function print(element) {
    console.log(element);
}
const newNum = num.forEach(print);
newNum();
/* Output
1
2
3
4
5
6
7
8
9
10
*/
 
//MAP functions
/*
const houses = ["duffy","dooley","donovan","bergin"]
const houseinCaps = houses.map(function(hnames) {
    return hnames.toUpperCase();
})
console.log(houses);
console.log(houseinCaps);
//output (4) ['duffy', 'dooley', 'donovan', 'bergin']
//(4) ['DUFFY', 'DOOLEY', 'DONOVAN', 'BERGIN']
*/
/*
const fullNames = [{fname : "Albus", lname: "Dumbledore"},{fname: "Harry", lname:"Potter"}];
const firstNames = fullNames.map(function (element){
    return element.fname;
})
console.log(firstNames);

const lastNames = fullNames.map((element) => {  
    return element.lname;
})
console.log(lastNames);
*/
/* Output
(2) ['Albus', 'Harry']
(2) ['Dumbledore', 'Potter']
*/
