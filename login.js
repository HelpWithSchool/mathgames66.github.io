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
     
      const w = window.open("about:blank"); // Open a new window

      w.document.open(); // Open the document of the new window
      w.document.write("<html><body></body></html>"); // Write the basic HTML structure to the document
      w.document.close(); // Close the document of the new window
      
      // Load the file "games.html" into the new window
      w.location.href = "games.html";
 

    } else {
      alert('Invalid username or password');
    }
  });