// 4、修改
var mysql  = require('mysql'); 
var DATABASE = "node";
var TABLE = "user";

function startUpdate () {
  
var connection = mysql.createConnection({    
    host     : '127.0.0.1',      
    user     : 'root',             
    password : '123456',      
    port: '3306',                  
    database: DATABASE,
  });
   
  connection.connect();
  var updateSql = 'UPDATE '+TABLE+' SET username = ?,password = ? WHERE id = ?';
  var param = ['Hello World','99',1];
  //改 up
  connection.query(updateSql,param,function (err, result) {
     if(err){
           console.log('[UPDATE ERROR] - ',err.message);
           return;
     }
    console.log('---------START--UPDATE-------------');
    console.log('UPDATE affectedRows',result.affectedRows);
    console.log('---------END----UPDATE-------------');
  });
   
  connection.end();
  
}