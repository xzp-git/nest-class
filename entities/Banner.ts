import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uk_loca', ['location'], {})
@Entity('banner', { schema: 'xdclass-edu' })
export class Banner {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('varchar', {
    name: 'location',
    nullable: true,
    comment:
      '格式页面-位置-模块：\n\thome_swiper_banner 首页轮播图\n\thome_top_ad 首页顶部轮播图\n\thome_floor_ad 首页底部浮动广告\n\tlist_right_banner 列表页右上角轮播图\n\tdetail_rightn_banner 播放页右边轮播图',
    length: 128
  })
  location: string | null;

  @Column('varchar', {
    name: 'name',
    nullable: true,
    comment: '录播图中文名称',
    length: 255
  })
  name: string | null;

  @Column('varchar', {
    name: 'img_url',
    nullable: true,
    comment: '图片列表，逗号分隔',
    length: 2048
  })
  imgUrl: string | null;

  @Column('varchar', {
    name: 'pc_link',
    nullable: true,
    comment: 'PC端跳转链接，逗号分隔',
    length: 2048
  })
  pcLink: string | null;

  @Column('varchar', {
    name: 'h5_link',
    nullable: true,
    comment: 'H5端跳转连接，逗号分隔',
    length: 2048
  })
  h5Link: string | null;

  @Column('varchar', {
    name: 'expired',
    nullable: true,
    comment: '展现条件，once一次，forever永久',
    length: 64
  })
  expired: string | null;

  @Column('int', {
    name: 'del',
    nullable: true,
    comment: '是否删除，1是删除，0是未删除'
  })
  del: number | null;

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
