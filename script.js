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
                <button class="remove-button d-inlineblock bg-primary text-white" onclick="removeTodoItem(this)">Remove</button>
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

function removeTodoItem(button) {
    const taskItem = button.parentNode.parentNode;
    // Remove the task item from the todo list
    todoList.removeChild(taskItem);
}