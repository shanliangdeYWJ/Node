var Sequelize = require('sequelize');
var mySequelize = require('../mySequelize');


// user 模型
var User = mySequelize.define('user', {
  id: {
    type: Sequelize.INTEGER(50),
    primaryKey: true, //主键
    autoIncrement: true
  },
  username: {
    type:Sequelize.STRING,
  },
  name: Sequelize.STRING,
  password: Sequelize.STRING,
}, {
  freezeTableName: true // 新建表格默认名字加上 s ，这句话让他不加上 s
});

// mySequelize.sync().then(function(result){
//   // 同步了'Role'、'UserRole'、'UserRole'三个模型
//   console.log(result);
  
// });

/**
 * 封装了 模型，模型已经用Sequelize调用了连接数据库的模块
 */
module.exports = {
  User: User
};