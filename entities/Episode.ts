import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('episode', { schema: 'xdclass-edu' })
export class Episode {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('varchar', {
    name: 'title',
    nullable: true,
    comment: '集标题',
    length: 524
  })
  title: string | null;

  @Column('int', {
    name: 'ordered',
    nullable: true,
    comment: '顺序，章里面的顺序'
  })
  ordered: number | null;

  @Column('varchar', {
    name: 'hwyun_id',
    nullable: true,
    comment: '华为云id',
    length: 256
  })
  hwyunId: string | null;

  @Column('varchar', {
    name: 'aliyun_id',
    nullable: true,
    comment: '阿里云视频id',
    length: 128
  })
  aliyunId: string | null;

  @Column('int', { name: 'chapter_id', nullable: true, comment: '章节主键id' })
  chapterId: number | null;

  @Column('varchar', {
    name: 'duration',
    nullable: true,
    comment: '时长 分钟，单位',
    length: 64
  })
  duration: string | null;

  @Column('int', {
    name: 'free',
    nullable: true,
    comment: '0表示免费，1表示付费',
    default: () => "'0'"
  })
  free: number | null;

  @Column('int', { name: 'product_id', nullable: true, comment: '视频id' })
  productId: number | null;

  @Column('timestamp', {
    name: 'gmt_create',
    nullable: true,
    comment: '创建时间',
    default: () => 'CURRENT_TIMESTAMP'
  })
  gmtCreate: Date | null;

  @Column('timestamp', {
    name: 'gmt_modified',
    nullable: true,
    comment: '更新时间',
    default: () => 'CURRENT_TIMESTAMP'
  })
  gmtModified: Date | null;
}
