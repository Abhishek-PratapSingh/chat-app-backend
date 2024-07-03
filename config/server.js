const fs = require('fs');
const path = require('path');

module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
  // ssl: {
  //   key: fs.readFileSync(path.join(__dirname, 'ssl/server.key')),
  //   cert: fs.readFileSync(path.join(__dirname, 'ssl/server.cert')),
  // },
});
