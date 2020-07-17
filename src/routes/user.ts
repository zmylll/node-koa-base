import Router from '@koa/router';
import UserController from '../controllers/user';

// user相关路由
const userRouter = new Router();
userRouter.get('/user', UserController.userList);
userRouter.post('/user', UserController.userAdd);
userRouter.get('/user/:id', UserController.userDetail);
userRouter.put('/user/:id', UserController.userUpdate);
userRouter.delete('/user/:id', UserController.userDelete);

export default userRouter;