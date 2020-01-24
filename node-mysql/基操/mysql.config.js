//配置链接数据库参数
module.exports = {
    host : 'localhost',
    port : 3306,//端口号
    database : 'node',//数据库名
    user : 'root',//数据库用户名
    password : '123456'//数据库密码
};


function compute (a,b,callback){
  callback(a,b);
}

//加法
compute(10,12,function(num1,num2){
  console.log(num1+num2);
});