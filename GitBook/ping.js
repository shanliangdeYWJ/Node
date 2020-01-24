/*jshint esversion: 6 */
/*jslint node: true */
/*jshint strict: true */
"use strict";
const models = require('./models');
models.Person.findOrCreate({where:{openid:zhang.openid},defaults:zhang}).then(function(person){
  models.Shuoshuo.create(
      one_shuoshuo
  ).then(function(shuoshuo){
      // res.end("ok");
      console.log(shuoshuo);
  });
});

models.Person.findOne({where:{openid:"openid_______"}}).then(function(person){
  models.Shuoshuo.findOne({where:{openid:"openid_______"}}).then(function(shuoshuo){
    shuoshuo.addPings(person);
    console.log('oj');
    // res.end("oj");
  });
});

// 1.获取文章
models.Shuoshuo.findAll({limit:10,include:[{model:models.Person,as:"pings"}]}).then(function(shuoshuos){
  shuoshuos.forEach(function(shuoshuo){
      shuoshuo.pings = shuoshuo.getPings();
      console.log(shuoshuo.pings);
  });
  console.log(JSON.stringify(shuoshuos));
  // res.end(JSON.stringify(shuoshuos));
});

// 分析：
// 其中include用于加载relationship中的数据