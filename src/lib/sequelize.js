const { Sequelize } = require("sequelize");
const setupModels = require("../models/index");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_SERVER,
    dialect:
    
      process.env
        .DB_ENGINE,
        timezone: '-04:00', //for writting from database
    dialectOptions: {
      options: {
       // useUTC: false, //for reading from database
        encrypt: false,
      },
      
    },
  }
);

setupModels(sequelize);
sequelize.sync();

module.exports = sequelize;



