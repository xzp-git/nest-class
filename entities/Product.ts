import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product', { schema: 'xdclass-edu' })
export class Product {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('varchar', { name: 'title', nullable: true, length: 255 })
  title: string | null;

  @Column('varchar', {
    name: 'cover_img',
    nullable: true,
    comment: '封面图',
    length: 255
  })
  coverImg: string | null;

  @Column('decimal', {
    name: 'old_amount',
    nullable: true,
    comment: '原价',
    precision: 12,
    scale: 2
  })
  oldAmount: string | null;

  @Column('decimal', {
    name: 'amount',
    nullable: true,
    comment: '现价',
    precision: 12,
    scale: 2
  })
  amount: string | null;

  @Column('varchar', {
    name: 'summary',
    nullable: true,
    comment: '概要',
    length: 2048
  })
  summary: string | null;

  @Column('longtext', { name: 'detail', nullable: true, comment: '详情' })
  detail: string | null;

  @Column('varchar', {
    name: 'product_type',
    nullable: true,
    comment: '商品类型，字典表',
    length: 64
  })
  productType: string | null;

  @Column('bigint', { name: 'uv', nullable: true, comment: '浏览人数' })
  uv: string | null;

  @Column('bigint', { name: 'buy_num', nullable: true, comment: '购物人数' })
  buyNum: string | null;

  @Column('bigint', { name: 'teacher_id', nullable: true, comment: '作者id' })
  teacherId: string | null;

  @Column('varchar', {
    name: 'course_level',
    nullable: true,
    comment: '课程等级',
    length: 64
  })
  courseLevel: string | null;

  @Column('int', { name: 'hour', nullable: true, comment: '时长' })
  hour: number | null;

  @Column('int', { name: 'episode_num', nullable: true, comment: '集数' })
  episodeNum: number | null;

  @Column('varchar', {
    name: 'player',
    nullable: true,
    comment: '播放器，默认选择第一个，数组[aliyun，hw，tencent]',
    length: 255
  })
  player: string | null;

  @Column('varchar', {
    name: 'tdk',
    nullable: true,
    comment: 'SEO关键词',
    length: 1024
  })
  tdk: string | null;

  @Column('varchar', {
    name: 'ali_zip_url',
    nullable: true,
    comment: '阿里云盘资料，使用||分割地址和密码，空则不提供',
    length: 524
  })
  aliZipUrl: string | null;

  @Column('varchar', {
    name: 'bd_zip_url',
    nullable: true,
    comment: '百度云盘资料，，使用||分割地址和密码，空则不提供',
    length: 524
  })
  bdZipUrl: string | null;

  @Column('varchar', {
    name: 'note_url',
    nullable: true,
    comment: '在线笔记地址，后续使用md导出自带目录',
    length: 1024
  })
  noteUrl: string | null;

  @Column('int', {
    name: 'del',
    nullable: true,
    comment: '是否删除，1是删除，0是未删除'
  })
  del: number | null;

  @Column('datetime', {
    name: 'gmt_modified',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP'
  })
  gmtModified: Date | null;

  @Column('datetime', {
    name: 'gmt_create',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP'
  })
  gmtCreate: Date | null;

  @Column('decimal', {
    name: 'total_point',
    nullable: true,
    comment: '总分',
    precision: 10,
    scale: 2
  })
  totalPoint: string | null;

  @Column('decimal', {
    name: 'content_point',
    nullable: true,
    comment: '内容评分',
    precision: 10,
    scale: 2
  })
  contentPoint: string | null;

  @Column('decimal', {
    name: 'easy_point',
    nullable: true,
    comment: '简洁易懂',
    precision: 10,
    scale: 2
  })
  easyPoint: string | null;

  @Column('decimal', {
    name: 'logic_point',
    nullable: true,
    comment: '逻辑清晰',
    precision: 10,
    scale: 2
  })
  logicPoint: string | null;
}
