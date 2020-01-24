每个模型定义   分开  还是  放在一个js文件里面

放在一起：数据库映射靠sequelize.sync()
分开：还是模型名字.stnc()

  分开放置的时候每个文件就是一个模型，里面只定义一个文件，文件自己还可以自己定义默认的操作，也就是数据库里面的函数

  然后u最后一句是  模型.sync()  意味让机器理解这个模型的代码然后执行 数据库语句


用navicate新建表格插入外键，然后Nodejs去操作数据库，如果不新建数据库对象，
直接去操作增删改查，那么会报错，因为有外键的数据库操作，需要先撤掉外键删掉
数据再把外键加上去，这样会加重代码负担你还要去写sql语句，所以用对象封装数据库之间的关系。

# 学习基于Node 与 Mysql 数据库的 Nodejs orm 数据库模块
## orm : 对象关系映射 Object Relational Mapping

### [Sequelize github地址](https://github.com/sequelize/sequelize)
### [Sequelize API](http://www.nodeclass.com/api/sequelize.html)

### [Sequelize ORM 模块地址](https://sequelize.org/)

### TI 笔录
### [［Node.js与数据库］支持多种数据库的ORM框架 Sequelize](https://itbilu.com/nodejs/npm/V1Xn7hb--.html)
### [Sequelize 中文API文档－1. 快速入门、Sequelize类](https://itbilu.com/nodejs/npm/VkYIaRPz-.html)
### [Sequelize 中文API文档－2. Model 的定义、使用与Model类的API](https://itbilu.com/nodejs/npm/V1PExztfb.html)
### [Sequelize 中文API文档－3. 模型（表）之间的关系/关联](https://itbilu.com/nodejs/npm/41qaV3czb.html)
### [Sequelize 中文API文档－4. 查询与原始查询](https://itbilu.com/nodejs/npm/VJIR1CjMb.html)
### [Sequelize 中文API文档－5. 实例的使用、Instance类介绍](https://itbilu.com/nodejs/npm/N1sdaHTzb.html)
### [Sequelize 中文API文档－6. 事务的使用与Transaction类](https://itbilu.com/nodejs/npm/EJO6CcCM-.html)
### [Sequelize 中文API文档－7. Scopes 作用域的使用](https://itbilu.com/nodejs/npm/E1Eft20MW.html)
### [Sequelize 中文API文档－8. 钩子函数的使用、Hooks相关API](https://itbilu.com/nodejs/npm/NJoieZl7Z.html)
### [Sequelize 中文API文档－9. 数据类型类 DataTypes 及其API](https://itbilu.com/nodejs/npm/N1XuSG-QW.html)
### [Sequelize 中文文档及sequelize模块的一些说明](https://itbilu.com/nodejs/npm/N1yrA4HQW.html)

###[nodejs使用sequelize操作mysql实例](https://cloud.tencent.com/developer/article/1431796)

### GitBook
### [GitBook 一对多 多对多](https://chaochuandea.gitbooks.io/sequelize/content/)


### 参考链接

### [使用nodejs数据库ORM(Object Relational Mapping)模块](https://blog.csdn.net/wwwise/article/details/54694491)

### [在node.js中，使用基于ORM架构的Sequelize，操作mysql数据库之增删改查](https://www.cnblogs.com/kongxianghai/p/5582661.html)