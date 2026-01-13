// Todo Application v1.0
let todos = [];

function addTodo(text) {
  todos.push({ id: Date.now(), text, done: false });
}

function removeTodo(index) {
  todos.splice(index, 1);
}

function listTodos() {
  return todos;
}

function markDone(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) todo.done = true;
}
