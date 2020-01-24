
// 手机端登陆路由 借鉴 https://www.cnblogs.com/sword-successful/p/5234890.html 里面的传值
function phoneIndex(response, params) {
  console.log("Executing 'phoneIndex' handler");
  response.writeHead(200, {
    'Content-Type': 'text/html;charset=utf-8'
  });

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
  var sal_params = [params.username, params.password];
  connection.query(ReadSql, sal_params,function (err, result) {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return false;
    }
    console.log(result);
    console.log(result[0].username);
    if (result != null) {
      response.end("ok"); // 传递回去 字符串 JSON.stringify(result).toString()
    }else {
      response.end("no");
    }
  });
  // 关闭数据库连接
  connection.end();
}