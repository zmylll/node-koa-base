import { Context } from 'koa';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../const/constants';
import { User } from '../entity/user';
import { getManager } from 'typeorm';
import {UnauthorizedException} from '../const/errorCodeMessage';
export default class AuthController {
  public static async login(ctx: Context) {
    const userRepository = getManager().getRepository(User);
    const user = await userRepository.createQueryBuilder().where({ username: ctx.request.body.username }).addSelect('User.password').getOne();
    if (!user) {
      throw new UnauthorizedException('用户不存在')
    } else if (user.password === ctx.request.body.password) {
      ctx.status = 200
      ctx.body = { token: jwt.sign({ id: user.id }, JWT_SECRET) };
    } else {
      throw new UnauthorizedException('密码错误')
    }
  }
  public static async register(ctx: Context) {
    ctx.body = 'Register controller'
  }
}