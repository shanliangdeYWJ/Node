// 1.增加 https://blog.csdn.net/zxc123e/article/details/53232409
var mysql = require('mysql');
var orm = require('orm');
var databaseConfig = require('../config/mysql.config'); //引入数据库配置模块中的数据


function Insert(username, password) {
  // 创建数据库连接
  var connection = mysql.createConnection(databaseConfig);
  // 开始连接数据库
  connection.connect();

  var addSql = 'INSERT INTO xtwh_gift (username, password) values(?,?)';
  var param = [username, password];
  connection.query(addSql, param, function (error, result) {
    if (error) {
      console.log(error.message);
    } else {
      console.log('insert id: ' + result.insertId);
    }
  });

  connection.end();
}

module.exports.startCreate = startCreate;