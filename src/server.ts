import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import { logger } from './util/logger';
import * as routes from './routes/index';
import { createConnection } from 'typeorm';
import { JWT_SECRET } from './const/constants';
import jwt from 'koa-jwt';
import 'reflect-metadata';
import Router from '@koa/router';

/**
 * 连接数据库
 */
createConnection().then(() => {
  // 初始化 Koa 应用实例
  const app = new Koa();

  // 注册中间件
  // 添加日志打印
  app.use(logger())
  // 添加跨域
  app.use(cors());
  //把koa2上下文的formData数据解析到ctx.request.body
  app.use(bodyParser());
  
  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      // 只返回 JSON 格式的响应
      ctx.status = err.status || 500;
      ctx.body = { message: err.message };
    }
  });
  // 无需校验token
  app.use(routes.authRouter.routes()).use(routes.authRouter.allowedMethods());
  // 需要校验token
  app.use(jwt({ secret: JWT_SECRET }));
  // 登录注册不需要token校验，删除它
  delete routes.authRouter;

  //将所有的route注册
  Object.values(routes).forEach((route:Router)=>{
    app.use(route.routes()).use(route.allowedMethods());
  })
  // 运行服务器，可以自行设置端口
  app.listen(9999);
}).catch((err: string) => console.log('typeOrm connection error:', err));
