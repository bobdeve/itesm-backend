const express = require('express');
const items = require('./data')
const app = express();
const PORT = process.env.PORT || 3000; // Port to run the server

const cors = require('cors');


// Enable CORS for all origins
app.use(cors());

// Endpoint to get all items
app.get('/items', (req, res) => {
    res.json(items);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
