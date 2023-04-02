import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('idx_phone', ['phone'], { unique: true })
@Entity('account', { schema: 'xdclass-edu' })
export class Account {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('varchar', {
    name: 'username',
    nullable: true,
    comment: '昵称',
    length: 128
  })
  username: string | null;

  @Column('varchar', {
    name: 'head_img',
    nullable: true,
    comment: '头像',
    length: 524
  })
  headImg: string | null;

  @Column('varchar', {
    name: 'phone',
    nullable: true,
    unique: true,
    comment: '手机号',
    length: 255
  })
  phone: string | null;

  @Column('varchar', {
    name: 'pwd',
    nullable: true,
    comment: '密码',
    length: 255
  })
  pwd: string | null;

  @Column('varchar', {
    name: 'position',
    nullable: true,
    comment: '职位',
    length: 255
  })
  position: string | null;

  @Column('varchar', {
    name: 'slogan',
    nullable: true,
    comment: '用户签名',
    length: 524,
    default: () => "'全栈工程师'"
  })
  slogan: string | null;

  @Column('varchar', {
    name: 'sex',
    nullable: true,
    comment: '男，女',
    length: 2,
    default: () => "'1'"
  })
  sex: string | null;

  @Column('varchar', {
    name: 'city',
    nullable: true,
    comment: '城市',
    length: 256
  })
  city: string | null;

  @Column('varchar', {
    name: 'role',
    nullable: true,
    comment: '用户角色，字典表,common, year_vip,forever_vip',
    length: 11
  })
  role: string | null;

  @Column('int', {
    name: 'learn_time',
    nullable: true,
    comment: '学习时长，单位小时'
  })
  learnTime: number | null;

  @Column('int', {
    name: 'vip_rank',
    nullable: true,
    comment: 'vip排名',
    default: () => "'0'"
  })
  vipRank: number | null;

  @Column('datetime', {
    name: 'vip_expired',
    nullable: true,
    comment: '会员过期时间，永久会员配置2099年'
  })
  vipExpired: Date | null;

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

  @Column('varchar', {
    name: 'disabled',
    nullable: true,
    comment: '是否冻结 on off',
    length: 16
  })
  disabled: string | null;

  @Column('varchar', { name: 'openid', nullable: true, length: 128 })
  openid: string | null;

  @Column('varchar', { name: 'unionid', nullable: true, length: 128 })
  unionid: string | null;
}
