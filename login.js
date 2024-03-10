// Define user credentials
var users = [
    { username: 'admin', password: '5nlz7h3BiTWZ3x399ot8nYqGxHpys7Np' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' }
  ];
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the values from the form fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Check user credentials
    var authenticatedUser = users.find(function(user) {
      return user.username === username && user.password === password;
    });
  
    if (authenticatedUser) {
      alert('Login successful');
  
      // Open a new window/tab with the desired HTML page
      var newWindow = window.open('about:blank');
      newWindow.location.href = 'games.html';
    } else {
      alert('Invalid username or password');
    }
  });