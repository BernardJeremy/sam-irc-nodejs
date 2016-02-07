var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');

app.set('engine', 'html');

require('./routes')(app);

app.listen(8080, function() {
  console.log('Listening on port 8080');
});
