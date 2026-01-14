import { login, logout, isLoggedIn, getCurrentUser } from './auth.js';

// test login
function testLogin() {
  login('user', 'pass');
  console.assert(isLoggedIn() === true, 'should be logged in');
  console.assert(getCurrentUser().username === 'user', 'username should match');
}

// test logout
function testLogout() {
  login('user', 'pass');
  logout();
  console.assert(isLoggedIn() === false, 'should be logged out');
}

testLogin();
testLogout();
console.log('All tests passed!');
