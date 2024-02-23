var tasks = {};

function addTask(id, category, name) {
  var newTask = {};
  newTask.category = category;
  newTask.name = name;
  newTask.completed = false; // Adding a 'completed' property initialized as false
  tasks[id] = newTask;
  // Log the updated task object
  console.log("Task added:", tasks[id]);
  return newTask;
}

function displayTasksByCategory() {
  var categories = {};

  // Group tasks by category
  for (var key in tasks) {
    var task = tasks[key];
    categories[task.category] = categories[task.category] || [];
    categories[task.category].push(task);
  }

  // Display tasks by category
  console.log("Tasks by Category:");
  for (var category in categories) {
    console.log(category + ":");
    categories[category].forEach(function (task) {
      console.log("  - " + task.name + " (Completed: " + task.completed + ")");
    });
  }
}

function markTaskAsCompleted(id) {
  if (tasks.hasOwnProperty(id)) {
    tasks[id].completed = true;
    console.log("Task marked as completed:", tasks[id]);
  } else {
    console.log("Task not found with id:", id);
  }
}

function removeTask(id) {
  if (tasks.hasOwnProperty(id)) {
    delete tasks[id];
    console.log("Task removed with id:", id);
  } else {
    console.log("Task not found with id:", id);
  }
}

// Example usage
console.log("Adding tasks:");
addTask(1, "racing", "Delphine arimo kwiruka mu du challenge");
addTask(2, "kurya", "Delphine ari kurya");
addTask(3, "dancing", "Modern dance");
addTask(4, "kurya", "ndi kurya ibishyimbo");

console.log("Displaying tasks by category:");
displayTasksByCategory();

console.log("Marking task as completed:");
markTaskAsCompleted(1);

console.log("Removing task:");
removeTask(2);

console.log("Updated tasks after removal:");
console.log(tasks);


