var Sequelize = require('sequelize');
var mySequelize = require('./mySequelize');

var User = mySequelize.define('user2', { 
  username: Sequelize.STRING, 
  name: Sequelize.STRING
});

User.sync().then(function(result){
  User.create({username:'6', name:'4'})
  .then(function(result){
    // console.log(result.username);
    
    User.findOne({ where: {username: '6'} })
    .then(function(result){
      console.log(result); // { id: 1, firstName: 'xxxx', lastName: 'xxxx'}
    }); 
  });
});