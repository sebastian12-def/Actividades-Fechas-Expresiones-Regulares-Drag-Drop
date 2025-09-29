// Seleccionar todas las tareas
const tasks = document.querySelectorAll(".kanban-task");
let draggedTask = null;

// Drag start
tasks.forEach(task => {
  task.addEventListener("dragstart", () => {
    draggedTask = task;
    setTimeout(() => task.style.display = "none", 0);
  });

  task.addEventListener("dragend", () => {
    draggedTask.style.display = "block";
    draggedTask = null;
  });
});


const columns = document.querySelectorAll(".kanban-column");

columns.forEach(col => {
  col.addEventListener("dragover", e => {
    e.preventDefault();
    col.classList.add("over");
  });

  col.addEventListener("dragleave", () => {
    col.classList.remove("over");
  });

  col.addEventListener("drop", () => {
    col.classList.remove("over");
    if(draggedTask){
      col.appendChild(draggedTask);
    }
  });
});
