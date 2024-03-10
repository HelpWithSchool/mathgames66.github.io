// Define user credentials
var users = [
    { username: 'admin', password: 'KEY-5nlz7h3BiTWZ3x399ot8nYqGxHpys7Np' },
    { username: 'schoolkids', password: 'KEY-FREE' },
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
      
      var win = window.open();
      win.document.body.style.margin = '0';
      win.document.body.style.height = '100vh';
      var iframe = win.document.createElement('iframe');
      iframe.style.border = 'none';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.margin = '0';
      iframe.src = 'https://gummysbear.vercel.app/games.html';
      win.document.body.appendChild(iframe);
      
      function myFunction() {
          location.replace("https://www.bing.com/")
      }
        
      window.close();

    } else {
      alert('Invalid username or password');
    }
  });