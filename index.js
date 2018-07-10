#!/usr/bin/env node

const http = require('http');
const app = require('./server/server.js');


// Get port from environment and store in Express.
const port = process.env.PORT || '3000';
app.set('port', port);

// create server
const server = http.createServer(app);

// error handling
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES': // privileged port (1-1023) is used without rights (e.g. no sudo)
      console.error(`Port ${port} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE': // another process already listens on the port
      console.error(`Port ${port} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

// announce listening
server.on('listening', () => {
  console.log(`Listening on port ${port}`);
});

// start listening
server.listen(port);
