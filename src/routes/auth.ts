import Router from '@koa/router';
import AuthController from '../controllers/auth';

const authRouter = new Router();

// auth相关路由
//登录
authRouter.post('/auth/login', AuthController.login);
//注册
authRouter.post('/auth/register', AuthController.register);

export default authRouter;