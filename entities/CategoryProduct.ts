import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category_product', { schema: 'xdclass-edu' })
export class CategoryProduct {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('int', { name: 'category_id', nullable: true, comment: '分类主键' })
  categoryId: number | null;

  @Column('int', { name: 'product_id', nullable: true, comment: '视频主健' })
  productId: number | null;

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
