// utility functions

export function formatDate(date) {
  return date.toISOString().split('T')[0];
}

export function generateId() {
  return Math.random().toString(36).substring(2, 11);
}

export function debounce(fn, ms) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), ms);
  };
}
