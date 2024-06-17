// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the logging middleware function
const requestLogger = (req, res, next) => {
    // Log the HTTP method and URL of each incoming request
    console.log(`${req.method} ${req.url}`);
    
    // Call next() to pass control to the next middleware function
    next();
};

// Apply the logging middleware to all routes
app.use(requestLogger);

// Example route definitions
app.get('/', (req, res) => {
    res.send('Welcome to the online store!');
});

app.post('/purchase', (req, res) => {
    res.send('Purchase made!');
});

// Start the server and listen on a specific port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
