import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('course_question', { schema: 'xdclass-edu' })
export class CourseQuestion {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', comment: '主键' })
  id: string;

  @Column('varchar', { name: 'title', comment: '标题', length: 255 })
  title: string;

  @Column('longtext', { name: 'content', comment: '内容' })
  content: string;

  @Column('bigint', { name: 'account_id', comment: '用户id' })
  accountId: string;

  @Column('varchar', { name: 'head_img', nullable: true, length: 524 })
  headImg: string | null;

  @Column('varchar', { name: 'username', nullable: true, length: 128 })
  username: string | null;

  @Column('int', { name: 'uv', comment: '阅读数', default: () => "'0'" })
  uv: number;

  @Column('int', { name: 'up', comment: '点赞数', default: () => "'0'" })
  up: number;

  @Column('int', { name: 'answer_num', nullable: true, comment: '回答数量' })
  answerNum: number | null;

  @Column('datetime', {
    name: 'gmt_modified',
    comment: '修改时间',
    default: () => 'CURRENT_TIMESTAMP'
  })
  gmtModified: Date;

  @Column('datetime', {
    name: 'gmt_create',
    comment: '创建时间',
    default: () => 'CURRENT_TIMESTAMP'
  })
  gmtCreate: Date;

  @Column('int', { name: 'episode_id', nullable: true, comment: '集id' })
  episodeId: number | null;

  @Column('int', { name: 'product_id', nullable: true, comment: '视频id' })
  productId: number | null;

  @Column('int', { name: 'coin', nullable: true, comment: '悬赏支付金币' })
  coin: number | null;

  @Column('int', { name: 'weight', nullable: true, comment: '数字越大越靠前' })
  weight: number | null;

  @Column('int', {
    name: 'del',
    comment: '是否删除 0：未删除 1：已删除',
    default: () => "'0'"
  })
  del: number;
}
