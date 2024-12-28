// Save a JavaScript object
const user = {
    name: 'Alice',
    email: 'alice@example.com',
    loggedIn: true,
};
localStorage.setItem('user', JSON.stringify(user));

// Retrieve and parse the object
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name); // Output: Alice
