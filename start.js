var cluster = require('cluster');
var express = require('express');

var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
} else {
  	// Workers can share any TCP connection
  	// In this case its a HTTP server
	var handlers = require('./handlers');
	var app = express();
	
	app.get('/', handlers.indexHandler);
	app.get('/user/:id', handlers.userHandler);
	app.listen(3000);
	console.log('Listening on port 3000...');
}
