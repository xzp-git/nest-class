import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('chapter', { schema: 'xdclass-edu' })
export class Chapter {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('bigint', { name: 'product_id', nullable: true, comment: '视频id' })
  productId: string | null;

  @Column('varchar', {
    name: 'title',
    nullable: true,
    comment: '章标题',
    length: 255
  })
  title: string | null;

  @Column('int', { name: 'ordered', nullable: true, comment: '排序' })
  ordered: number | null;

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
