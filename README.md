## 使用说明

这个项目的起源是因为前期我在学习node的时候，学的很凌乱，不知道流程。所以我就整理了这个项目。这个项目是基于koa2的，对很多基本配置进行了封装。比如连接数据库、生成token、校验token等等，开发/学习人员只需要fork/clone下来，就可以直接使用，无需再做配置，欢迎大家使用，有问题或者需求请提交`Issues`,本框架将持续更新。作为一个前端小白，欢迎各位大佬指教。

## 功能点

### 操作数据库

本框架使用的是`typeorm`操作数据库，只需要在根目录ormconfig.json文件中配置你的数据库信息就可以了。示例：

```
{
  "type": "mysql",
  "host": "192.168.0.234",
  "port": 3306,
  "username": "root",
  "password": "123456",
  "database": "koa-test-zmy",
  "synchronize": true,
  "entities": ["src/entity/*.ts"],
  "cli": {
    "entitiesDir": "src/entity"
  }
}
```

### token认证
token认证是使用的koa-jwt，在登录之后返回token值，其余接口调用服务的时候验证token

### 错误信息

内置了一些常用的错误码及错误信息。

### 目录结构
整个框架目录结构比较完整，基本可以满足常规开发

* const文件夹中主要存放的是定义的常量文件
* controllers文件夹中则是项目里面的所有的控制器
* entity文件夹中是数据库的文件
* routes文件夹中是路由文件
* util文件夹中是一些工具文件

## 使用方式

* 首先进入项目目录

* 安装项目依赖
` npm i `
* 启动项目
` npm start `

