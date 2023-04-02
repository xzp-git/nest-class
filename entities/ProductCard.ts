import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product_card', { schema: 'xdclass-edu' })
export class ProductCard {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('varchar', {
    name: 'name',
    nullable: true,
    comment: '标题，如热门视频',
    length: 128
  })
  name: string | null;

  @Column('varchar', {
    name: 'summay',
    nullable: true,
    comment: '副标题',
    length: 255
  })
  summay: string | null;

  @Column('int', { name: 'row_num', nullable: true, comment: '几行' })
  rowNum: number | null;

  @Column('int', { name: 'column_num', nullable: true, comment: '几列' })
  columnNum: number | null;

  @Column('varchar', {
    name: 'product_list',
    nullable: true,
    comment: '视频列表',
    length: 255
  })
  productList: string | null;

  @Column('varchar', {
    name: 'card_type',
    nullable: true,
    comment: '卡片类型，video、page',
    length: 128
  })
  cardType: string | null;

  @Column('varchar', {
    name: 'icon',
    nullable: true,
    comment: '图标',
    length: 255
  })
  icon: string | null;

  @Column('int', {
    name: 'weight',
    nullable: true,
    comment: '权重,数字越大排越前',
    unsigned: true
  })
  weight: number | null;

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
