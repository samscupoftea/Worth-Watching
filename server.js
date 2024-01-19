//Here I will import express and set up my basic server 

const express = require('express');
const fetch = require('node-fetch'); // require node-fetch
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Your Server is running on ${port}`);
});

app.use(express.static('public'));

//GET ROUTES GO HERE 
app.get('/api/data/', (req, res) => {
    //Fetch data from external API 
    fetch('https://your-external-api.com/data')
        .then(apiResponse => apiResponse.json())
        .then(data => res.json(data))
        .catch(error => res.status(500).json({ error: 'Error fetching data' }));
});

// Example using Express.js and node-fetch
app.get('/search-movie', (req, res) => {
    const movieName = req.query.name;
    fetch('https://api.examplemovie.com/search?query=' + movieName)
        .then(apiResponse => apiResponse.json())
        .then(data => res.json(data))
        .catch(error => res.status(500).json({ error: 'Error fetching data' }));
});