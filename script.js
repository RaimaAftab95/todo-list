
const input = document.getElementById("inp");
const validator = document.querySelector(".validator");
const todoList = document.getElementById("todo-list");

function addTodo() {
    if (input.value !== "") 
     {
        const taskText = input.value;
        const taskItem = document.createElement("div");
        // taskItem.classList.add("task-item");
        taskItem.classList.add("list-group-item");

taskItem.innerHTML = `<div class="input-container w-100 my-2 d-flex">
        <input type="text" class="form-control" value="${taskText}" readonly>
    <button class="btn trash-btn  p-2 delete-todo float-end"  onclick="removeTodo(this)">
        <i class="fas fa-trash"></i>
    </button> 
    </div>`;
        // Append the task item to the todo list
        todoList.appendChild(taskItem);
       // Clear the input field and hide the error message
        input.value = "";
        validator.textContent = "";
    }

    else
    {
        validator.textContent = "Please enter todo task";
    }
}

//   making remove function
function removeTodo(i)
{
console.log(i.parentNode.remove());
}
//   making remove function for all todo list items
function removeAllTodos() {
todoList.innerHTML = '';
}

//edit button will be added later
    //     <button class="btn edit-btn p-2 btn-sm edit-todo float-end">
    //     <i class="fas fa-edit"></i>
    // </button>