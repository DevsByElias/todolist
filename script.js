// document.addEventListener hakee alla olevat elementit apista
document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector(" .add-button");
  const todoInput = document.getElementById("todoInput");
  const todoList = document.querySelector(" .todoList");
  const counterElement = document.querySelector(" .counter-container span");

  // Function newTask() = uuden taskin lisääminen appiin
  function newTask() {
    const taskContent = todoInput.value.trim();
    if (taskContent !== "") {
      const newTask = document.createElement("li");
      newTask.textContent = taskContent;
      todoList.appendChild(newTask);
      todoInput.value = "";
      updateCounter();
    }
  }
  // Function deleteTask() = taskin poistaminen
  function deleteTask(task) {
    task.remove();
    updateCounter();
  }
  // Function updateCounter() = listan päivitys
  function updateCounter() {
    const taskCount = todoList.children.length;
    counterElement.textContent = taskCount;
  }

  addButton.addEventListener("click", newTask);
  todoList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      deleteTask(event.target);
    }
  });
});
