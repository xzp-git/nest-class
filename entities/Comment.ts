import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('comment', { schema: 'xdclass-edu' })
export class Comment {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('varchar', {
    name: 'content',
    nullable: true,
    comment: '内容',
    length: 256
  })
  content: string | null;

  @Column('bigint', { name: 'account_id', nullable: true, comment: '用户id' })
  accountId: string | null;

  @Column('varchar', {
    name: 'head_img',
    nullable: true,
    comment: '用户头像',
    length: 256
  })
  headImg: string | null;

  @Column('varchar', {
    name: 'username',
    nullable: true,
    comment: '昵称',
    length: 128
  })
  username: string | null;

  @Column('int', { name: 'up', nullable: true, comment: '点赞数' })
  up: number | null;

  @Column('bigint', { name: 'order_id', nullable: true, comment: '订单id' })
  orderId: string | null;

  @Column('bigint', { name: 'product_id', nullable: true, comment: '商品id' })
  productId: string | null;

  @Column('datetime', {
    name: 'gmt_create',
    nullable: true,
    comment: '创建时间',
    default: () => 'CURRENT_TIMESTAMP'
  })
  gmtCreate: Date | null;

  @Column('datetime', {
    name: 'gmt_modified',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP'
  })
  gmtModified: Date | null;

  @Column('decimal', {
    name: 'total_point',
    nullable: true,
    comment: '评分，10分满分',
    precision: 10,
    scale: 2,
    default: () => "'8.88'"
  })
  totalPoint: string | null;

  @Column('decimal', {
    name: 'content_point',
    nullable: true,
    comment: '内容实用评分',
    precision: 10,
    scale: 2,
    default: () => "'8.80'"
  })
  contentPoint: string | null;

  @Column('decimal', {
    name: 'easy_point',
    nullable: true,
    comment: '简洁易懂评分',
    precision: 10,
    scale: 2,
    default: () => "'8.80'"
  })
  easyPoint: string | null;

  @Column('decimal', {
    name: 'logic_point',
    nullable: true,
    comment: '逻辑评分',
    precision: 10,
    scale: 2,
    default: () => "'8.80'"
  })
  logicPoint: string | null;

  @Column('tinyint', {
    name: 'del',
    nullable: true,
    comment: '逻辑删除',
    default: () => "'0'"
  })
  del: number | null;
}
