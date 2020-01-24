module.exports = function (models, username, name, password) {
  models.sync().then(function (result) {
    models.create({
        username: username,
        name: name,
        password: password
      })
      .then(function (result) {
        models.findOne({
            raw: true
          })
          .then(function (result) {
            console.log(result);

            models.removeAttribute('createdAt');
            models.removeAttribute('updatedAt');
            models.findOne({
                raw: true
              })
              .then(function (result) {
                console.log(result); // // { id: 1, lastName: 'xxxx'}
              });
          });
      });
  });
};