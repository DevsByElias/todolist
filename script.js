document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector(".add-button");
  const todoInput = document.getElementById("todoInput");
  const todoList = document.querySelector(".todoList");
  const counterElement = document.querySelector(".counter-container span");

  function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach((taskContent) => {
      const newTask = document.createElement("li");
      newTask.textContent = taskContent;
      todoList.appendChild(newTask);
    });
    updateCounter();
  }

  function saveTasks() {
    const tasks = Array.from(todoList.children).map((task) => task.textContent);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Function newTask() = uuden taskin lisääminen appiin
  function newTask() {
    const taskContent = todoInput.value.trim();

    if (taskContent !== "") {
      const newTask = document.createElement("li");
      newTask.textContent = taskContent;
      todoList.appendChild(newTask);
      todoInput.value = "";
      saveTasks();
      updateCounter();
    }
  }

  function deleteTask(task) {
    localStorage.removeItem(task.textContent);
    task.remove();
    saveTasks();
    updateCounter();
  }

  function updateCounter() {
    const taskCount = todoList.children.length;
    counterElement.textContent = taskCount;
  }

  loadTasks();

  addButton.addEventListener("click", newTask);
  todoList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      deleteTask(event.target);
    }
  });
});
