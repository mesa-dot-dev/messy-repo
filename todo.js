// todo app
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
