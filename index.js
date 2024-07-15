const express = require('express');
const app = express();

const db = require('./models');

'localhost:3002/user'

db.sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log("Server running on port 3002");
  });
});