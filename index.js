/**
  * Project : TWEB labo 1
  * Author : Antoine Drabble & Guillaume Serneels
  * Date : 25.09.2016
  * Description : simple node web-app displaying the index.html page
  *
*/
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'))
app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});