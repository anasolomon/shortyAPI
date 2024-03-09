const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const validUrl = require('valid-url');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const cleanURIEndpoint = 'https://cleanuri.com/api/v1/shorten';

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
    console.log("Server started on local port 3000");
});