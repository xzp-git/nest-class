import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('uk_record', ['accountId', 'productId', 'episodeId'], { unique: true })
@Entity('duration_record', { schema: 'xdclass-edu' })
export class DurationRecord {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('bigint', { name: 'account_id', nullable: true })
  accountId: string | null;

  @Column('bigint', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('bigint', { name: 'episode_id', nullable: true })
  episodeId: string | null;

  @Column('int', {
    name: 'duration',
    nullable: true,
    comment: '当前集时间长，单位秒'
  })
  duration: number | null;

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
