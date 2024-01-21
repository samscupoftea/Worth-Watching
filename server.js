//Here I will import express and set up my basic server 

const express = require('express');
const fetch = require('node-fetch'); // require node-fetch
const app = express();
const port = 3000;
const apiKey = process.env.API_KEY;
const baseUrl = process.env.BASE_URL;

const url = `${baseUrl}/account/null/rated/movies?api_key=${apiKey}&language=en-US&page=1&sort_by=created_at.asc`;

const options = {method: 'GET', headers: {accept: 'application/json'}};

require('dotenv').config();
app.listen(port, () => {
    console.log(`Your Server is running on ${port}`);
});

app.use(express.static('public'));


fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
//GET ROUTES GO HERE 
app.get('/api/data/', (req, res) => {
    //Fetch data from external API 
    console.log(url); // Add this line before your fetch call

    fetch('https://your-external-api.com/data')
        .then(apiResponse => apiResponse.json())
        .then(data => res.json(data))
        .catch(error => res.status(500).json({ error: 'Error fetching data' }));
});

// Example using Express.js and node-fetch
app.get('/search-movie', (req, res) => {
    const movieName = req.query.name;
    console.log(url); // Add this line before your fetch call

    fetch('https://api.examplemovie.com/search?query=' + movieName)
        .then(apiResponse => apiResponse.json())
        .then(data => res.json(data))
        .catch(error => res.status(500).json({ error: 'Error fetching data' }));
});