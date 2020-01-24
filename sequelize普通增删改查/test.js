// 4. 测试文件

var user = require('./user');
// 查询操作
user.findByName("jack");
// 添加用户
user.addUser('jack2', 'jack@163.com');
// 更新
user.update(1001);
// 删除
user.destroy(1001);
