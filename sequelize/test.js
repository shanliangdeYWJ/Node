var create2 = require('./create');
var models = require('./models');

create2(models.User, '3', '3', '3');
// 查询昵称   注册前先判断是否存在这个昵称
// 插入语句   存在就不进行插入语句，返回一句 已经存在

