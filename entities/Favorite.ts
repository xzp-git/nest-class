import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uk_uid_vid', ['productId', 'accountId'], { unique: true })
@Entity('favorite', { schema: 'xdclass-edu' })
export class Favorite {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('bigint', { name: 'product_id', nullable: true, comment: '视频id' })
  productId: string | null;

  @Column('bigint', { name: 'account_id', nullable: true, comment: '用户id' })
  accountId: string | null;

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
