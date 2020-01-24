function fun1() {
  try {
    fun2();
  } catch (error) {
    throw error;
  }
}

async function fun2() {
  try {
    await fun3();
  } catch (error) {
    console.log("error");
  }
}

function fun3() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var r = Math.random();
      if (r < 0.5) {
        reject("err");
      }
    }, 1000);
  });
}

fun2();


// 捕捉错误的中间件

var catchError = async function(ctx, next){
  try {
    await next();
  } catch (error) {
    ctx.body = {
      code: 500,
      msg:'内部错误'
    };
  }
};
module.exports = catchError;