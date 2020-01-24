// 2、删除
var mysql = require('mysql');
var databaseConfig = require('./config/mysql.config'); //引入数据库配置模块中的数据
console.log('pDelete模块加载完毕');

function startDelete(sql, sql_params) {
  return new Promise(function (resolve, reject) {

    var connection = mysql.createConnection(databaseConfig);

    connection.connect();


    //ɾ
    connection.query(sql,sql_params, function (err, result) {
      if (err) {
        reject('[DELETE ERROR] - ', err.message);
        return;
      }

      console.log('-------------DELETE START--------------');
      resolve(result);
      console.log('DELETE affectedRows', result.affectedRows);
      console.log('-------------DELETE END--------------');
    });

    connection.end();
  });
}


module.exports.startDelete = startDelete;
// var sql = 'DELETE FROM user WHERE id = ?';
// var sql_params = [2];
// var promise = startDelete(sql, sql_params);
// promise.then(function (value) {
//   console.log(value);
//   if(!value.affectedRows){
//     console.log('该数据不存在'); 
//   }
// }).then(function (err) {
//   console.log(err);
// });

/*
结果：
OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0 }
*/