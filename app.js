var express = require('express');
var handlers = require('./handlers');
var app = express();

app.get('/', handlers.indexHandler);
app.get('/user/:id', handlers.userHandler);

app.listen(3000);
console.log('Listening on port 3000...');

