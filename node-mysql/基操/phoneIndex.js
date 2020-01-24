/**
 * 
 * @param {*} response 
 * @param {string} params 
 */

function phoneIndex(response, params) {
  console.log("Executing 'phoneIndex' handler");
  response.writeHead(200, {
    'Content-Type': 'text/html;charset=utf-8'
  });
  var sql = 'SELECT * FROM user where username = ? and password = ?';
  var sql_params = [params.username, params.password];
  var promise = pRead.startRead(sql, sql_params);
  
  promise.then(function (value) {
    response.end(JSON.stringify(value));
  }).then(response,function (value) {
    response.end(value);
  });
}