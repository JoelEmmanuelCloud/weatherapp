require('dotenv').config;()
const express = require('express');
const request = require('request');
const app = express();


app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname, '/index.html');
})

app.get('/weather', (req, res) => {
    
    let city = req.query.city
    let api_key = process.env.API_KEY;
    
    request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`, 
    
    function (error, response, body) {
        if (error) {
            console.log(error);
            res.send('An error occurred');
            return;
        }

        const data = JSON.parse(body);

        if (data.weather && data.weather.length > 0) {
            const description = data.weather[0].description;
            res.send(`The weather in ${city} is ${description}`);
        } else {
            res.send('Weather information not available');
        }
    });
    
})

const port = 3000;
const start = () => {
try {
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });
} catch (error) {
    console.log(error);
}

}

start();