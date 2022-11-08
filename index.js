// Declare html-elements - - - - - - - - - - - - - - - - - - - - 
let toDoDiv = document.querySelector("#to-do-div");
let toDoInput = document.querySelector("#to-do-input");
let addBtn = document.querySelector("#add-task");
let messageText = document.querySelector("#message")
let toDoList = document.querySelector("#to-do-list");
let removeToDo = document.querySelector("#remove-task");

// Empty array for To Do - - - - - - - - - - - - - - - - - - - - 
let toDoArr = [];

// Function add To Do - - - - - - - - - - - - - - - - - - - - - - 
function addToDo() {
    
    messageText.innerText = "";
    let arrInput = toDoInput.value;

    if (arrInput === "") {
        messageText.innerText = "Please add a new prompt"
        return false;
    } else {
        toDoArr.push(arrInput);
        toDoInput.value = "";
        displayToDo();
    }
}

// Function display To Do - - - - - - - - - - - - - - - - - - - - 
function displayToDo() {

    let toDoLi = document.createElement("li");

    toDoArr.forEach((toDo) => {
        // toDoLi.innerHTML="";
        toDoLi.innerText = toDo
        toDoLi.innerHTML += `<label> <input type="checkbox" value="2"</label>`
        // toDoLi.innerHTML += `<input type="checkbox" value="2"><label>${toDo}</label></input>`
    })
    
    toDoList.append(toDoLi);
}

// Function remove checkboxes - - - - - - - - - - - - - - - - - - 
function removeCheckboxes() {
    
    let allCheckedBoxes = document.querySelectorAll("input[type='checkbox']:checked");

    allCheckedBoxes.forEach((box) => {
        box.parentElement.parentElement.remove();
        toDoArr.splice(parseInt(box.value)-1, 1);
    });
}
        
// Buttons and keys - - - - - - - - - - - - - - - - - - - - - - - - -
addBtn.addEventListener("click", () =>{
    addToDo();
});

toDoInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addToDo();
    }
});

removeToDo.addEventListener("click", () => {
    removeCheckboxes();
});
