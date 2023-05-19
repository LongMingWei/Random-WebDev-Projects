const express = require('express');
const app = express();
const parser = require('body-parser');

app.use('/', parser.urlencoded({extended: true}));

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/calculator.html");
});

app.post('/', function(req,res) {
    var bmi = parseFloat(req.body.weight) / Math.pow(parseFloat(req.body.height), 2);
    res.send("Your BMI is " + bmi);
});

app.listen(8000, () => console.log('Port 8000'));