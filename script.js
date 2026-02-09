const taskList = document.getElementById("taskList");

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => createTask(task));
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim() === "") return;

  createTask(input.value);
  saveTask(input.value);
  input.value = "";
}

function createTask(text) {
  const li = document.createElement("li");
  li.textContent = text;

  li.onclick = () => {
    li.remove();
    removeTask(text);
  };

  taskList.appendChild(li);
}

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

loadTasks();
