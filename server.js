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