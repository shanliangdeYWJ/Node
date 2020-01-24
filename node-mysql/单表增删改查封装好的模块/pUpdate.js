// 4、修改
var mysql = require('mysql');
var databaseConfig = require('./config/mysql.config'); //引入数据库配置模块中的数据
console.log('pUpdate模块加载完毕');

function startUpdate(sql, sql_params) {
  return new Promise(function (resolve, reject) {
    // 创建数据库连接
    var connection = mysql.createConnection(databaseConfig);
    // 开始数据库查询
    connection.connect();
    //修改数据库数据
    connection.query(sql, sql_params, function (err, result) {
      if (err) {
        reject('[UPDATE ERROR] - ', err.message);
        return;
      }
      console.log('---------START--UPDATE-------------');
      resolve(result);
      console.log('UPDATE affectedRows', result.affectedRows);
      console.log('---------END----UPDATE-------------');
    });
    // 关闭数据库连接
    connection.end();
  });
}
module.exports.startUpdate = startUpdate;
// 测试
// var sql = 'UPDATE user SET username = ?,password = ? WHERE id = ?';
// var sql_params = ['Hello World', '11111', 1];
// var promise = startUpdate(sql, sql_params);
// promise.then(function(value){
//   console.log(value);
// }).then(function(err){
//   console.log(err);
// });

// 返回整个 result 查出来的结果：
/*
OkPacket {
  fieldCount: 0,    // 
  affectedRows: 1,  // 影响的行数
  insertId: 0,      // 插入的id值
  serverStatus: 2,  // 服务状态
  warningCount: 0,  // 错误值
  message: '(Rows matched: 1  Changed: 0  Warnings: 0',
  protocol41: true,
  changedRows: 0 }  // 改变的行数
*/