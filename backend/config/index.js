require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV != 'production',
  port: process.env.PORT || 5000,
  secret: process.env.SECRET_TOKEN,
};
module.exports = config;
