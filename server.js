const express = require('express');
const fetch = require('node-fetch');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;
const baseUrl = process.env.BASE_URL;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Route to search for movies
app.get('/search-movie', (req, res) => {
    const movieName = req.query.name;
    const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieName)}`;

    fetch(url, { method: 'GET', headers: { accept: 'application/json' } })
        .then(apiResponse => apiResponse.json())
        .then(data => {
            console.log(data); // Log the data here
            res.json(data); // Optionally, you can still send the data back to the client
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            res.status(500).json({ error: 'Error fetching data' });
        });
});
