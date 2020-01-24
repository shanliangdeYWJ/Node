// npm install sequelize 安装sequelize模块
// npm install mysql2 -S sequelize 需要单独安装mysql依赖

var Sequelize = require('sequelize');
// 设置一个连接池 连接的数据库的名称  用户名 密码 
module.exports = new Sequelize('sequelize', 'root', '123456', {
  host: 'localhost',  // 连接数据库的主机
  port: 3306,         // 数据库服务器端口
  dialect: 'mysql',   // 数据库的方言  也就是你用什么数据库
  // timezone:  process.env.TZ, //时间转换时从数据库得到的JavaScript时间。这个时区将应用于连接服务器的 NOW、CURRENT_TIMESTAMP或其它日期函数
  define: {
    underscored: true // 字段以下划线（_）来分割（默认是驼峰命名风格）
  },
  // operatorsAliases: false, // 限制应用程序需要的别名
  // 数据库的连接池数量
  pool: {
    max: 5, // 最大连接数 
    min: 0, // 最小连接数
    idle: 10000 // 连接最大空置时间（毫秒），超时后将释放连接
  }
});

// module.exports.mySequelize = mySequelize;
// var User = mySequelize.define('userinfo', {
//   id: {
//     type: Sequelize.STRING(50),
//     primaryKey: true //主键
//   },
//   username: Sequelize.STRING, //用户名
//   password: Sequelize.STRING, //密码 字符串
//   role: Sequelize.INTEGER, //权限 整数
// }, {
//   freezeTableName: true,  // 
//   timestamps: false  // 
// });

/*timestamp字段表示数据库中是否会自动更新createdAt和updatedAt字段，false表示不会增加这个字段。
freezeTableName为false表示该模型对应的表明就为userinfo表，默认时为true，对应表名为userinfos*/