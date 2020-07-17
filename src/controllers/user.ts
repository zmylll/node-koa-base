import { Context } from 'koa';
import { getManager } from 'typeorm';
import {User} from '../entity/user';

export default class UserController {
  public static async userList(ctx: Context) {
    const userRepository = getManager().getRepository(User);
    const users = await userRepository.findAndCount();
    ctx.status = 200;
    ctx.body = users;
  }
  public static async userDetail(ctx: Context) {
    const userRepository = getManager().getRepository(User);
    const user = await userRepository.findOne(ctx.params.id);
    if(user){
      ctx.status = 200;
      ctx.body = user;
    }else{
      ctx.status = 500;
    }
  }
  public static async userUpdate(ctx: Context) {
    const userRepository = getManager().getRepository(User);
    const updateUser = await userRepository.update(ctx.params.id,ctx.request.body)
    if(updateUser){
      ctx.status = 200;
      ctx.body = updateUser;
    }else{
      ctx.status = 500;
    }
  }
  public static async userAdd(ctx: Context) {
    const userRepository = getManager().getRepository(User);
    const addUser = await userRepository.save(ctx.request.body)
    if(addUser){
      ctx.status = 200;
      ctx.body = addUser;
    }else{
      ctx.status = 500;
    }
  }
  public static async userDelete(ctx: Context) {
    const userRepository = getManager().getRepository(User);
    const user = await userRepository.delete(ctx.params.id);
    if(user){
      ctx.status = 200;
      ctx.body = user;
    }else{
      ctx.status = 500;
    }
  }
}