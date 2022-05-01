let userInput = prompt("What would you like to do? ");
let list = [];
let count = 0;
while(userInput !== "quit")
{
    if(userInput == "new")
    {
        let newTodo = prompt("Enter a new todo : ");
        list.push(newTodo);
        console.log(list);
        userInput = prompt("What would you like to do? ");
    }
    else if(userInput == "list")
    {
        console.log('**********');
        for (let i of list)
        {
            console.log(`I need to ${i}`);
        }
        console.log('**********');
        userInput = prompt("What would you like to do? ");
    }
    else if(userInput == "delete")
    {
        let delIndex = parseInt(prompt("Enter the index of todo to delete : "));
        let deleted = list.splice(delIndex,1);
        console.log(deleted);
        userInput = prompt("What would you like to do? ");
    }
    else
    {
        console.log("enter valid input : ");
        userInput = prompt("What would you like to do? ");
    }
}
console.log("OK I UNDERSTAND YOU HAVE QUIT");