var User = require('./models');

module.exports = async function (models, username, name, password) {
  await models.sync(); // 模型和表格连接
  await models.create({ // 表格新建一条数据
    username: username,
    name: name,
    password: password
  });
  var results1 = await models.findOne({ raw: true }); // 表格查询数据
  console.log(results1); // 打印查询语句返回的结果
  // models.removeAttribute('createdAt','updatedAt');
  models.removeAttribute('createdAt');
  models.removeAttribute('updatedAt');
  var results2 = await models.findOne({ raw:true });
  console.log(results2);
  
};