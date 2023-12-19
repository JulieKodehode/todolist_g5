// Define a function named addTodoTask
function addTodoTask() {
	// Get the value of the input field with the ID 'taskInput'
	const taskInput = document.querySelector("#taskInput").value;
	// Log the value of the input to the console
	console.log(taskInput);

	// Create a new list item element
	const taskItem = document.createElement("li");

	// Set the text content of the list item to the value of the input
	taskItem.textContent = taskInput;

	// Get the element with the ID 'taskList'
	const taskList = document.querySelector("#taskList");

	// Append the newly created list item to the taskList
	taskList.appendChild(taskItem);

	// console.log("Is button clicked?");
}

// Get the button element with the ID 'taskButton'
const taskButton = document.querySelector("#taskButton");

// Add an event listener to the taskButton that calls the addTodoTask function when clicked
taskButton.addEventListener("click", addTodoTask);
