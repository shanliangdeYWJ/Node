// 1.增加 https://blog.csdn.net/zxc123e/article/details/53232409
var mysql = require('mysql');
var databaseConfig = require('./config/mysql.config');  //引入数据库配置模块中的数据
console.log('pInsert模块加载完毕');

function startInsert(sql, sql_params) {
  return new Promise(function(resolve,reject){
  // 创建数据库连接
  var connection = mysql.createConnection(databaseConfig);
  // 开始数据库查询
  connection.connect();
  //修改数据库数据
  connection.query(sql, sql_params, function (error, result) {
    if (error) {
      reject('[Insert ERROR] - ', error.message);
      return;
    } else {
      console.log('---------START--UPDATE-------------');
      resolve(result);
      console.log('INSERT insertId: ' + result.insertId);
      console.log('---------END----UPDATE-------------');
    
    }
  });
  connection.end();
  });
}
module.exports.startInsert = startInsert;
// 测试
// var sql = 'INSERT INTO user (username, password) values(?,?)';
// var sql_params = ['username', 'password'];
// var promise = startInsert(sql,sql_params);
// promise.then(function(value){
//   console.log(value);
// }).then(function(err){
//   console.log(err);
// });