let userInput = prompt("What would you like to do? ");
console.log(userInput);
let list = [];
let count = 0;
while (true)
{
   /*  if(userInput == "list")
    {
       for(let i = 0; i<10; i++)
       {
        console.log("*")
       }
       for (let i of list)
       {
            console.log(`${count} : ${i}`)
       } 
       for(let i = 0; i<10; i++)
       {
        console.log("*")
       }
       let userInput = prompt("What would you like to do? ")
    }
    else  */if(userInput == "new")
    {
        let newTodo = prompt("Enter a new todo: ");
        list.push(newTodo);
        count++;
        userInput = prompt("What would you like to do? ") ;
    }
   /*  else if (userInput == "delete")
    {
        let delIndex = prompt("Enter the index of todo to delete : ")
        list.pop()
        count--
        console.log("To do removed")
        let userInput = prompt("What would you like to do? ")
    }
    else if (userInput == "quit") 
    {
        break
    }
    else 
    {
        let userInput = prompt("Invalid input What would you like to do? ")
    } */
}
/* 
console.log("OKAY, YOU HAVE QUIT THE APP")
 */