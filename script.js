function addTodoTask() {
	// Funksjonalitet
	const taskInput = document.querySelector("#taskInput").value;
	console.log(taskInput);

	const taskItem = document.createElement("li");

	taskItem.textContent = taskInput;

	const taskList = document.querySelector("#taskList");
	taskList.appendChild(taskItem);

	// console.log("Is button clicked?");
}

const taskButton = document.querySelector("#taskButton");

taskButton.addEventListener("click", addTodoTask);
