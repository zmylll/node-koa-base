import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
 * 定义数据库
 */
@Entity()
export class User {
  //添加主键
  @PrimaryGeneratedColumn()
  id: number;
  //添加数据列
  @Column()
  username: string;
  //添加数据列，select：false表示查询时不查询该列
  @Column({ select: false })
  password: string;
}