const express = require('express');
const mysql = require('mysql');


const app = express();

app.get('/', (req, res) => {
  // Handle the root route
  res.send('Hello, world!');
});

// Define more routes and middleware as needed

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
