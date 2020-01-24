var orm = require("orm");

orm.connect("mysql://username:password@host/database", function (err, db) {
  if (err) throw err;

    // 定义声明对象模型
    var Person = db.define("person", {
        name      : String,
        surname   : String,
        age       : Number, // 浮点型
        male      : Boolean,
        continent : [ "Europe", "America", "Asia", "Africa", "Australia", "Antartica" ], // ENUM枚举型
        photo     : Buffer, // 二进制BLOB数据
        data      : Object // 以JSON编码
    }, {
        methods: {
            fullName: function () {
                return this.name + ' ' + this.surname;
            }
        },
        validations: {
            age: orm.enforce.ranges.number(18, undefined, "under-age")
        }
    });

    // 将声明的对象模型以建表的形式同步添加到数据库
    db.sync(function(err) {
        if (err) throw err;
        // 添加一条内容到 person 表
        Person.create({ id: 1, name: "John", surname: "Doe", age: 27 }, function(err) {
            if (err) throw err;

                // 以 surname 的值查询person表
                Person.find({ surname: "Doe" }, function (err, people) {
                    // 相当于执行SQL语句: "SELECT * FROM person WHERE surname = 'Doe'"
                    if (err) throw err;

                    console.log("People found: %d", people.length);
                    console.log("First person: %s, age %d", people[0].fullName(), people[0].age);

                    people[0].age = 16;
                    people[0].save(function (err) {
                        // err.msg = "under-age";
                });
            });
        });
    });
});