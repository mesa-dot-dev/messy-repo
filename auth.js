// auth module
let currentUser = null;

export function login(username, password) {
  if (!username || !password) {
    throw new Error('Invalid credentials');
  }
  currentUser = { username };
  return true;
}

export function logout() {
  currentUser = null;
}

export function getCurrentUser() {
  return currentUser;
}

export function isLoggedIn() {
  return currentUser !== null;
}
