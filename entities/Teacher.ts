import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('phone', ['phone'], { unique: true })
@Entity('teacher', { schema: 'xdclass-edu' })
export class Teacher {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('varchar', {
    name: 'name',
    nullable: true,
    comment: '昵称',
    length: 128
  })
  name: string | null;

  @Column('longtext', { name: 'profile', nullable: true, comment: '简介' })
  profile: string | null;

  @Column('varchar', {
    name: 'head_img',
    nullable: true,
    comment: '头像',
    length: 1024
  })
  headImg: string | null;

  @Column('varchar', {
    name: 'wechat_qrcode',
    nullable: true,
    comment: '微信二维码',
    length: 256
  })
  wechatQrcode: string | null;

  @Column('varchar', {
    name: 'pay_qrcode',
    nullable: true,
    comment: '打赏二维码',
    length: 256
  })
  payQrcode: string | null;

  @Column('double', {
    name: 'point',
    nullable: true,
    comment: '评分',
    precision: 10,
    scale: 2
  })
  point: number | null;

  @Column('varchar', {
    name: 'remark',
    nullable: true,
    comment: '讲师入驻信息-不对外展示',
    length: 4056
  })
  remark: string | null;

  @Column('varchar', {
    name: 'phone',
    unique: true,
    comment: '手机号',
    length: 128
  })
  phone: string;

  @Column('varchar', {
    name: 'online',
    nullable: true,
    comment: 'off是未审核下线，on是已经审核上线',
    length: 11,
    default: () => "'0'"
  })
  online: string | null;

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
}
