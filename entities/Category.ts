import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category', { schema: 'xdclass-edu' })
export class Category {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
    comment: '主键',
    unsigned: true
  })
  id: string;

  @Column('varchar', {
    name: 'name',
    nullable: true,
    comment: '分类名称',
    length: 128
  })
  name: string | null;

  @Column('bigint', { name: 'pid', nullable: true, comment: '父分类id' })
  pid: string | null;

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

  @Column('int', {
    name: 'weight',
    nullable: true,
    comment: '权重越高，数字越大'
  })
  weight: number | null;
}
