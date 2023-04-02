import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('play_record', { schema: 'xdclass-edu' })
export class PlayRecord {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('bigint', { name: 'product_id', nullable: true, comment: '视频id' })
  productId: string | null;

  @Column('bigint', {
    name: 'current_episode_id',
    nullable: true,
    comment: '对应的episode主键id，用来获取当前集的播放'
  })
  currentEpisodeId: string | null;

  @Column('bigint', { name: 'account_id', nullable: true, comment: '用户主键' })
  accountId: string | null;

  @Column('varchar', {
    name: 'learn_ids',
    nullable: true,
    comment: '已经学的集id集合[1,32,42]，数组长度，是进度百分比',
    length: 5000
  })
  learnIds: string | null;

  @Column('varchar', {
    name: 'pay_status',
    nullable: true,
    comment: '支付状态，new免费记录，pay付费记录',
    length: 32
  })
  payStatus: string | null;

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
}
