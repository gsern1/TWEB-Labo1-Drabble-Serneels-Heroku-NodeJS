


var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('port', (process.env.PORT || 5000));

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');

app.get('/', function (req, res)
{
    res.render('index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});