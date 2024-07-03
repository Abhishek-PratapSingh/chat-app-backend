module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('DATABASE_URI'),
      },
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: true,
      },
    },
  },
});



