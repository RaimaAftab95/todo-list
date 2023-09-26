const input = document.getElementById("inp");
const validator = document.querySelector(".validator");
const todoList = document.getElementById("todo-list");

function addTodo() {
    if (input.value !== "")
     {
        const taskText = input.value;
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = `
        <div class="input-container d-flex">
            <input type="text" class="form-control" value="${taskText}" readonly>
            <i  onclick="removeTodo(this)" class="fas fa-trash-alt"></i> 
        </div>
    `;

        // Append the task item to the todo list
        todoList.appendChild(taskItem);

        input.value = "";
        validator.textContent = "";
    }
     else {
        validator.textContent = "Empty input";
    }
}

// function removeTodoItem(button) {
//     const taskItem = button.parentNode.parentNode;
//     // Remove the task item from the todo list
//     todoList.removeChild(taskItem);
// }

//   making remove function for trash icon
function removeTodo(i)
{
  // alert("remove todo");
  //  console.log(i);
  // console.log(i.parentNode);
  console.log(i.parentNode.remove());
}