let tasks = [];

//function for creating a task
function createTask(id, name, description) {
  const newTask = { id, name, description };
  tasks.push(newTask);
}

//function for viewing all tasks
function viewAllTasks() {
  return tasks;
}

//function for updating a task
function updateTask(id, newName, newDescription) {
  const task = tasks.find(t => t.id === id);  // Find the task by id
  if (task) {
    task.name = newName;
    task.description = newDescription;
  }
}

//function for deleting a task
function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
}

createTask(1, 'Task 1', 'Description for task 1');
createTask(2, 'Task 2', 'Description for task 2');
console.log(viewAllTasks());  // View all tasks
updateTask(1, 'Updated Task 1', 'Updated description for task 1');
console.log(viewAllTasks());  // View all tasks after update
deleteTask(2);
console.log(viewAllTasks());  // View all tasks after deletion
