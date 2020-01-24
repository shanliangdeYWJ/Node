/*jshint esversion: 6 */
/*jslint node: true */
/*jshint strict: true */
'use strict';
// 先创建用户
module.exports = function (sequelize, DataTypes) {
  var Person = sequelize.define("Person", {
    nick_name: DataTypes.STRING,
    head_img: DataTypes.STRING,
    openid: DataTypes.STRING
  }, {});

  return Person;
};



// 建立文章
module.exports = function (sequelize, DataTypes) {
  var Shuoshuo = sequelize.define("Shuoshuo", {
    text: DataTypes.STRING,
    url: DataTypes.STRING,
    nick_name: DataTypes.STRING,
    head_img: DataTypes.STRING,
    openid: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Shuoshuo.hasMany(models.Comment,{as:"comments"});
        Shuoshuo.belongsToMany(models.Person,{as:"pings", through: 'shuoshuo_pings'});
        Shuoshuo.hasMany(models.Image,{as:"images"});
      }
    }
  });

  return Shuoshuo;
};
// 分析下：
// 1.as:用于指定这这一栏的别名，如as:comments用于指定Shuoshuo.addComments(comment);
// 2.当ShuoShuo和Person两个类想通过连接表来做链接就可以使用belongsToMany，其中through: 'shuoshuo_pings'表示中间连接的表名


module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    content: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Comment.belongsTo(models.Person,{ as:"from",foreignKey: 'from_person_id' });
        Comment.belongsTo(models.Person,{ as:"to",foreignKey: 'to_person_id' });
        Comment.belongsTo(models.Shuoshuo, {
          onDelete: "CASCADE",
          foreignKey: "shuoshuo_id"
        });
      }
    }
  });

  return Comment;
};

// 分析：
// 1.belongsTo谁使用，谁就会多这个foreignKey字段