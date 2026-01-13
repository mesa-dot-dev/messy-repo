// Persistent storage for todos
const STORAGE_KEY = 'tiny-todos';

export function saveTodos(todos) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    return true;
  } catch (e) {
    console.error('Failed to save todos:', e);
    return false;
  }
}

export function loadTodos() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to load todos:', e);
    return [];
  }
}

export function clearStorage() {
  localStorage.removeItem(STORAGE_KEY);
}
