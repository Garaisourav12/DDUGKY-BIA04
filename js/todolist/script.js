const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");

todoForm.addEventListener("submit", createNewTodo);

function createNewTodo(event) {
	event.preventDefault(); // Preventing the form submitting behaviour

	if (todoInput.value.trim() === "") return; // Ignoring empty text

	// Create todo li
	const newTodo = document.createElement("li");
	newTodo.classList.add("todo-item");
	todoList.appendChild(newTodo);

	// Create span to display todo text
	const todoText = document.createElement("span");
	todoText.innerText = todoInput.value.trim();
	newTodo.appendChild(todoText);

	// Create delete button
	const deleteButton = document.createElement("button");
	deleteButton.innerText = "Delete";
	deleteButton.classList.add("delete");
	newTodo.appendChild(deleteButton);
	// Add event listener to delete button
	deleteButton.addEventListener("click", deleteTodo);

	// Create edit button
	const editButton = document.createElement("button");
	editButton.innerText = "Edit";
	editButton.classList.add("edit");
	newTodo.appendChild(editButton);
	// Add event listener to edit button
	editButton.addEventListener("click", editTodo);

	// Create complete button
	const completeButton = document.createElement("button");
	completeButton.innerText = "Complete";
	completeButton.classList.add("complete");
	newTodo.appendChild(completeButton);
	// Add event listener to complete button
	completeButton.addEventListener("click", completeTodo);

	todoInput.value = "";
}

function deleteTodo(event) {
	// parentNode is used to access the parent of any element
	// Here we are accessing the parent of the delete button which is the todo item
	event.target.parentNode.remove();
}

function editTodo(event) {
	// Open popup to take new todo task neme to update existing todo
	const newTodoText = prompt("Enter new todo task");
	if (newTodoText.trim() === "") return; // Ignore empty text
	event.target.parentNode.querySelector("span").innerText =
		newTodoText.trim();
}

function completeTodo(event) {
	event.target.parentNode.classList.add("completed");
	// Disable the button as there is no need of this button because it is already completed
	event.target.disabled = true;
}
