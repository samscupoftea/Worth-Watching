//Here I will import express and set up my basic server 

const express = require('express');
const app = express();
const port = 3000;

app.listen(port, ()=> {
    console.log(`Your Server is runnng on ${port}`)
});

app.use(express.static('public'));

//GET ROUTES GO HERE 
app.get('/api/data/', (req, res) => {
    //Fetch data from external API 
    //Return that data in JSON format
    res.json({ date: "Sample Data "});
});


// Example using Express.js
app.get('/search-movie', (req, res) => {
    const movieName = req.query.name;
    // Use movie API to fetch data
    // For example, using a hypothetical movie API
    fetch('https://api.examplemovie.com/search?query=' + movieName)
        .then(apiResponse => apiResponse.json())
        .then(data => res.json(data))
        .catch(error => res.status(500).json({ error: 'Error fetching data' }));
});
