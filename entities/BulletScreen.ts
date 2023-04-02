import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bullet_screen', { schema: 'xdclass-edu' })
export class BulletScreen {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('bigint', { name: 'product_id', nullable: true, comment: '视频id' })
  productId: string | null;

  @Column('bigint', { name: 'episode_id', nullable: true, comment: '集id' })
  episodeId: string | null;

  @Column('bigint', { name: 'account_id', nullable: true, comment: '用户id' })
  accountId: string | null;

  @Column('varchar', {
    name: 'head_img',
    nullable: true,
    comment: '头像',
    length: 524
  })
  headImg: string | null;

  @Column('varchar', {
    name: 'username',
    nullable: true,
    comment: '昵称',
    length: 11
  })
  username: string | null;

  @Column('varchar', {
    name: 'content',
    nullable: true,
    comment: '内容',
    length: 256
  })
  content: string | null;

  @Column('varchar', {
    name: 'style',
    nullable: true,
    comment: '样式 plain、vip会员、custom自定义',
    length: 128
  })
  style: string | null;

  @Column('bigint', {
    name: 'play_time',
    nullable: true,
    comment: '集播放第几分钟,秒为单位'
  })
  playTime: string | null;

  @Column('varchar', {
    name: 'source_type',
    nullable: true,
    comment: '内容来源 account、official',
    length: 255,
    default: () => "'10'"
  })
  sourceType: string | null;

  @Column('varchar', {
    name: 'target_url',
    nullable: true,
    comment: '可以点击跳转',
    length: 256
  })
  targetUrl: string | null;

  @Column('datetime', {
    name: 'gmt_create',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP'
  })
  gmtCreate: Date | null;

  @Column('datetime', {
    name: 'gmt_modified',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP'
  })
  gmtModified: Date | null;

  @Column('int', {
    name: 'del',
    nullable: true,
    comment: '0是未删除，1是已经删除',
    default: () => "'0'"
  })
  del: number | null;
}
