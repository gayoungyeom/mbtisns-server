'use strict';
//모델 정의 및 관계 설정
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);
db.Chatting = require('./chatting')(sequelize, Sequelize);
db.Message = require('./message')(sequelize, Sequelize);
db.Userchatting = require('./userchatting')(sequelize, Sequelize);

db.Post.belongsTo(db.User, {
  foreignKey: 'user_id',
  sourceKey: 'id'
});
db.User.hasMany(db.Post, {
  foreignKey: 'user_id',
  targetKey: 'id'
});

db.Comment.belongsTo(db.User, {
  foreignKey: 'user_id',
  sourceKey: 'id'
});
db.User.hasMany(db.Comment, {
  foreignKey: 'user_id',
  targetKey: 'id'
});

db.Comment.belongsTo(db.Post, {
  foreignKey: 'post_id',
  sourceKey: 'id'
});
db.Post.hasMany(db.Comment, {
  foreignKey: 'post_id',
  targetKey: 'id'
});

db.Message.belongsTo(db.Chatting, {
  foreignKey: 'chatting_id',
  sourceKey: 'id'
});
db.Chatting.hasMany(db.Message, {
  foreignKey: 'chatting_id',
  targetKey: 'id'
});

db.User.belongsToMany(db.Chatting, {
  through: 'Userchatting'
});
db.Chatting.belongsToMany(db.User, {
  through: 'Userchatting'
});

module.exports = db;
