const Sequelize = require('sequelize');
//환경변수 설정하는법
const env = process.env.NODE_ENV || 'devlopment';
const config = require('../config/config')[env];
const db ={};

const sequelize = new Sequelize(config.database, config.username, config.password, config)



Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
