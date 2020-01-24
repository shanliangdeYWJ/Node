// 3、查询
var mysql = require('mysql');

function startRead(username, password) {
  // 数据库连接
  
  var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'node',
  });
  // 开始查询操作
  connection.connect();
  var ReadSql = 'SELECT * FROM user where username = ? and password = ?';
  var params = [username, password];
  connection.query(ReadSql, params,function (err, result) {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return false;
    }
    console.log(result);
  });
  // 关闭数据库连接
  connection.end();
}
module.exports.startRead = startRead;
startRead('做她的太阳', 'YWJ17857072877');
