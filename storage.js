// Persistent storage for todos
const STORAGE_KEY = 'tiny-todos';

export function saveTodos(todos) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (e) {
    console.error('Failed to save todos:', e);
  }
}

export function loadTodos() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}
