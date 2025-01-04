const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Enable CORS for frontend-backend communication
app.use(cors());

// Serve JSON files from the 'data' folder
app.get('/api/food', (req, res) => {
    res.sendFile(path.join(__dirname, 'data', 'food.json'));
});

app.get('/api/hotels', (req, res) => {
    res.sendFile(path.join(__dirname, 'data', 'hotels.json'));
});

app.get('/api/attractions', (req, res) => {
    res.sendFile(path.join(__dirname, 'data', 'attractions.json'));
});

// Add a default route to handle invalid endpoints
app.get('/', (req, res) => {
    res.send(`
    <h1>Welcome to the Visit Penang API</h1>
    <p>Use the following endpoints:</p>
    <ul>
      <li><a href="/api/food">/api/food</a> - Get the list of top foods</li>
      <li><a href="/api/hotels">/api/hotels</a> - Get the list of top hotels</li>
      <li><a href="/api/attractions">/api/attractions</a> - Get the list of top attractions</li>
    </ul>
  `);
});

// Handle 404 errors for unknown routes
app.use((req, res) => {
    res.status(404).send({
        error: 'Not Found',
        message: 'The requested resource was not found on this server.',
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});