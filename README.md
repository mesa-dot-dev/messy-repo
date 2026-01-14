# Tiny Todo

A simpler todo app.

## Usage

```js
import { createTodo, getAllTodos } from './todo.js';
```

## API

### Todo Functions
- `createTodo(text, priority)` - Create a new todo
- `deleteTodo(index)` - Delete a todo by index
- `getAllTodos()` - Get all todos
- `markTodoComplete(id)` - Mark a todo as complete
- `removeCompletedTodos()` - Remove all completed todos

### Auth Functions
- `login(username, password)` - Log in a user
- `logout()` - Log out the current user
- `isLoggedIn()` - Check if a user is logged in
