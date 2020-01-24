// 3、查询
var mysql = require('mysql');
var databaseConfig = require('./config/mysql.config');  //引入数据库配置模块中的数据
console.log('pRead模块加载完毕');

function startRead(sql, sql_params) {
  return new Promise(function (resolve, reject) {
    // 创建数据库连接
    var connection = mysql.createConnection(databaseConfig);
    // 开始连接数据库
    connection.connect();
    // 查询数据库
    connection.query(sql, sql_params, function (err, result) {
      if (err) { reject('[SELECT ERROR] - ', err.message); return false; }
      resolve(result);
    });
    // 关闭数据库连接
    connection.end();
  });
}
module.exports.startRead = startRead;