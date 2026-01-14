// Todo Application v1.0
let todos = [];

function createTodo(text, priority = 'medium') {
  todos.push({ id: Date.now(), text, done: false, priority });
}

function deleteTodo(index) {
  todos.splice(index, 1);
}

function getAllTodos() {
  return todos;
}

function markTodoComplete(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) todo.done = true;
}

function removeCompletedTodos() {
  todos = todos.filter(t => !t.done);
}

export { createTodo, deleteTodo, getAllTodos, markTodoComplete, removeCompletedTodos };
