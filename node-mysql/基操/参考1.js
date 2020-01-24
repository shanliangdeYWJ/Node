

　/*Node的mysql模块，本人的感受就是不好用，各种报错，各种坑，有一个问题困扰了我很久，也不知道是不是我使用的方式不对，不过后来用easymysql模块解决了，我才深信这是一个坑。

问题描述：

　　假设有这么一个数据表table，它有两个字段index和name，在localhost:3000主页有一个按钮，上面写着“更新”，当我点击更新后会POST到localhost:3000/update，然后后台连接数据库进行更新操作每一条记录的name为“gdt”，更新完毕后回到主页，再重新按一下“更新”按钮，就会报错误，如下：

“{ [Error: Cannot enqueue Query after invoking quit.] code: 'PROTOCOL_ENQUEUE_AFTER_QUIT', fatal: false }”


https://www.cnblogs.com/tinyphp/p/4934287.html
https://www.cnblogs.com/shibaxiong/p/5929767.html
*/


exports.update = function(req, res) {
  //获得需要所有记录信息
  function getInfo() {
      return new Promise((resolve, reject) => {
          connection.query('SELECT `index`,`name` from table', function(err, result) {
              if (err) {
                  reject(err);
              } else {
                  resolve(result);
              }
          });

      });
  }

  // 将每一项的名字更新为gdt
  function updateName(info) {
      return new Promise((resolve, reject) => {
          var index = info['index'];
          connection.query("UPDATE  `table` SET `tableB`.`name` = 'gdt' WHERE `table`.`index` =?", index, function(err, result) {
              if (err) {
                  console.log(err);
              } else {
                  resolve('更新成功');
              }
          })
      })
  }

  async function update() {<br>        let result = '';
      //筛选出在公屏发言出现的环球uid和其对应的index
      var getinfoResult = await getInfo();
      for (let i = 0; i < getinfoResult.length; i++) {
          var updateResult = await updateName(getinfoResult[i]);
          console.log(updateResult);
      }<br>        return result?result:'success';
  }

  update().then(function(result) {
      console.log(result);

      //断开数据库连接
      connection.end();

     //回到主页
     res.redirect('/');
  })
}