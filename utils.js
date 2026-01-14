// utility functions

export function formatDate(date) {
  return date.toISOString().split('T')[0];
}

export function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
