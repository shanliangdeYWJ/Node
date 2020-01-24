var db=require('./mysql');
var TABLE = "user";
// 查询实例
db.query('select * from user', [],function(result,fields){
    console.log('查询结果：');
    console.log(result);
});
//添加实例
var username = '善良的YWJ';
var password = '123456';
var addSql = 'INSERT INTO user (username, password) values(?,?)';
var param = [username, password];

db.query(addSql,param,function(result,fields){
    console.log('添加成功');
});

