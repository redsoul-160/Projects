// Function to add todo

var Todos = document.getElementById("todos")
todos.style.display = "none"
function AddTodo() {
    // Get the input value
    var input = document.getElementById("input").value;
    
    if (input !== '') {
        // Create a checkbox for the todo item
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.style.margin= "0px 15px"
        checkbox.onchange = function() {
            // Toggle line-through style of todo item's text
            if (checkbox.checked) {
                todoItem.style.textDecoration = "line-through";
            } else {
                todoItem.style.textDecoration = "none";
            }
        };

        // Create a new todo item
        var todoItem = document.createElement("div");
        todoItem.textContent = input;
        todoItem.style.margin="0px 35px"
        
        // Create an edit button
        var editButton = document.createElement("button");
        editButton.className= "fa-solid fa-pen-to-square"
        editButton.classList.add("editButton");
        editButton.style.margin="0px 15px"
        editButton.onclick = function() {
            // Logic for editing todo
            var newText = todoItem.textContent
            document.getElementById("input").value= newText
            todoItem.remove()
        };
        
        // Create a delete button
        var deleteButton = document.createElement("button");
        deleteButton.className = "fa-solid fa-trash";
        deleteButton.classList.add("deleteButton");
        deleteButton.onclick = function() {
            // Logic for deleting todo
            todoItem.remove();
        };
        
        // Append elements to the todo list container
        var todoList = document.getElementById("todo_list");
        todoItem.prepend(checkbox);
        todoItem.appendChild(editButton);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
        todos.style.display = "flex"
        
        // Clear the input field
        document.getElementById("input").value = "";
    } else {
        input=document.getElementById("input")
        input.style.borderColor= "red"
    }
}
