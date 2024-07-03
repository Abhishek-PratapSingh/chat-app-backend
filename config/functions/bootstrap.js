'use strict';

const http = require('http');
module.exports = () => {
  if (!strapi.server) {
    throw new Error('Server was not initialized');
  }

  const ioServer = http.createServer();
  const io = require('socket.io')(ioServer, {
    path: '/socket.io',
    transports: ['websocket', 'polling']
  });

  io.on('connection', (socket) => {
    console.log('user connected');

    // When the server receives a message, it sends it back to all clients
    socket.on('chat message', async(msg) => {
      try {
        console.log('Message:', msg);

        // Ensure the service name is correct and matches your model name
        await strapi.services.conversation.create({
          message: msg.message,
          identifier: msg.identifier,
        });

        io.emit('chat message', msg); // Echoes the message to the client
      } catch (error) {
        console.error('Error creating message in database:', error);
      }
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  ioServer.listen(3010, () => {
    console.log('Socket.IO server listening on port 3010');
  });

  // Attach the io instance to the strapi object to make it accessible throughout the app
  strapi.io = io;
};
