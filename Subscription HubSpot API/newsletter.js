const express = require('express');
const request = require('request');
const parser = require('body-parser');
const https = require('https');

const app = express();
app.use(express.static(__dirname));
app.use('/', parser.urlencoded({extended: true}));

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/signup.html');
});

app.post('/', function(req,res) {
    var first = req.body.first;
    var last = req.body.last;
    var email = req.body.email;
    
    var data = {
        "properties": {
            "email": email,
            "firstname": first,
            "lastname": last
        }
    }
    
    var jsondata = JSON.stringify(data);
    var url = "https://api.hubapi.com/crm/v3/objects/contacts";
    var options = {
        method: "POST",
        headers: {
            "Authorization": "Bearer INSERT API KEY HERE",
            "Content-Type": "application/json"
        }
    }

    var req = https.request(url,options,function(response) {
        console.log(response.statusCode);
        if(response.statusCode === 201) {
            res.send("Data sent");
        }
        else {
            res.send("Data not sent (Error)");
        }
        response.on("data", function(data) {
            console.log(JSON.parse(data));
        });
    });

    req.write(jsondata);
    req.end();
});


app.listen(8000, function() {
    console.log('Server running at 8000');
});
