// Declare html-elements - - - - - - - - - - - - - - - - - - - - 
let toDoDiv = document.querySelector("#to-do-div");
let toDoInput = document.querySelector("#to-do-input");
let addBtn = document.querySelector("#add-task");
let messageText = document.querySelector("#message")
let toDoList = document.querySelector("#to-do-list");
let removeToDo = document.querySelector("#remove-task");

// Counter for number of To Do's - - - - - - - - - - - - - - - - 
let numberOfToDo = 0;

// Empty array for To Do's - - - - - - - - - - - - - - - - - - - - 
let toDoArr = [];

// Function add To Do - - - - - - - - - - - - - - - - - - - - - - 
function addToDo() {
    
    messageText.innerText = "";
    let arrInput = toDoInput.value;

    if (arrInput === "") {
        messageText.innerText = "Please add a new prompt"
        return false;
    } else {
        numberOfToDo++;
        toDoArr.push(arrInput);
        toDoInput.value = "";
        displayToDo();
    }
}

// Function display To Do - - - - - - - - - - - - - - - - - - - - 
function displayToDo() {
    let toDoLi = document.createElement("li");

    toDoLi.innerText = toDoArr[numberOfToDo-1];
    toDoLi.innerHTML += `<label> <input type="checkbox" value="${numberOfToDo}"></label>`
    // console.log("value is: " + numberOfToDo);
    
    toDoList.append(toDoLi);
    // console.log("list item: " + toDoArr[numberOfToDo-1])
    // console.log(" number of todo: " + numberOfToDo);
}

// Cross out To Do - - - - - - - - - - - - - - - - - - - - - - - 

    // Strike() ?? om man kryssar i checkboxar ska texten strykas över
    // if checkbox ikryssad --> stryk över text
    // addeventlisteners på checkboxar? 
    // flytta checkboxar till framför li
    
// Function remove checkboxes - - - - - - - - - - - - - - - - - - 
function removeCheckboxes() {
    
    let allCheckedBoxes = document.querySelectorAll("input[type='checkbox']:checked");
    // console.log(allCheckedBoxes);
    let doneToDo = [];
    // console.log(doneToDo);
    
    allCheckedBoxes.forEach((box) => {
        doneToDo.push(box.value);
        
        console.log("doneTodo arr " + doneToDo);
        //Värdet i arr skapas i checkboxarna och kommer från numberOfToDo 
        //Värdena blir de checkboxar som är ikryssade, alltså ex. 1, 3, 4 osv.
        //Hur ta bort listelement baserat på ikryssade checboxar?
    });
}
        
// Buttons - - - - - - - - - - - - - - - - - - - - - - - - - - - 
addBtn.addEventListener("click", () =>{
    addToDo();
});


// Enter key - - - - - - - - - - - - - - - - - - - - - - - - - - -
toDoInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addToDo();
    }
});

removeToDo.addEventListener("click", () => {
    removeCheckboxes();
});
