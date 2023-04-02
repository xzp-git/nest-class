import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('course_note', { schema: 'xdclass-edu' })
export class CourseNote {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', comment: '主键' })
  id: string;

  @Column('longtext', { name: 'content', comment: '内容' })
  content: string;

  @Column('bigint', { name: 'account_id', comment: '用户id' })
  accountId: string;

  @Column('varchar', {
    name: 'head_img',
    nullable: true,
    comment: '用户头像',
    length: 524
  })
  headImg: string | null;

  @Column('varchar', {
    name: 'username',
    nullable: true,
    comment: '用户名称',
    length: 128
  })
  username: string | null;

  @Column('int', { name: 'uv', comment: '阅读数', default: () => "'0'" })
  uv: number;

  @Column('int', { name: 'up', comment: '点赞数', default: () => "'0'" })
  up: number;

  @Column('int', {
    name: 'del',
    comment: '是否删除 0：未删除 1：已删除',
    default: () => "'0'"
  })
  del: number;

  @Column('bigint', { name: 'episode_id', nullable: true, comment: '集id' })
  episodeId: string | null;

  @Column('bigint', { name: 'product_id', nullable: true, comment: '视频id' })
  productId: string | null;

  @Column('int', {
    name: 'weight',
    nullable: true,
    comment: '默认0,数字越大越靠前，精选笔记需要排前面'
  })
  weight: number | null;

  @Column('datetime', {
    name: 'gmt_create',
    comment: '创建时间',
    default: () => 'CURRENT_TIMESTAMP'
  })
  gmtCreate: Date;

  @Column('datetime', {
    name: 'gmt_modified',
    comment: '修改时间',
    default: () => 'CURRENT_TIMESTAMP'
  })
  gmtModified: Date;
}
