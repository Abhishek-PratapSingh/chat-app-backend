module.exports = ({ env }) => ({
  settings: {
    cors: {
      enabled: true,
      origin: ['http://localhost:3000', 'http://localhost:1337'], // Adjust this as per your environment
      methods: ['GET', 'POST'],
      allowedHeaders: '*',
      credentials: true,
    },
    websocket: {
      enabled: true,
    },
  },
});
