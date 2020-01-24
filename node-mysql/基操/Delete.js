// 2、删除
var mysql  = require('mysql'); 
var DATABASE = "node";
var TABLE = "user";

function startDelete (id) {
  var connection = mysql.createConnection({    
      host     : '127.0.0.1',      
      user     : 'root',             
      password : '123456',      
      port: '3306',                  
      database: DATABASE,
    });
     
    connection.connect();
     
    var  delSql = 'DELETE FROM '+TABLE+' WHERE id = '+id+'';
    //ɾ
    connection.query(delSql,function (err, result) {
            if(err){
              console.log('[DELETE ERROR] - ',err.message);
              return;
            }       
     
           console.log('-------------DELETE--------------');
           console.log('DELETE affectedRows',result.affectedRows);
           console.log('&&&&&&&&&&&&&&&&&'); 
    });
     
    connection.end();
}
 

module.exports.startDelete = startDelete;