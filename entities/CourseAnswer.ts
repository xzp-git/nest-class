import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('episode_id', ['episodeId'], {})
@Index('video_id', ['productId'], {})
@Index('video_user', ['accountId', 'productId'], {})
@Entity('course_answer', { schema: 'xdclass-edu' })
export class CourseAnswer {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', comment: '主键' })
  id: string;

  @Column('longtext', { name: 'content', comment: '内容' })
  content: string;

  @Column('bigint', { name: 'account_id', comment: '用户id' })
  accountId: string;

  @Column('varchar', { name: 'head_img', nullable: true, length: 526 })
  headImg: string | null;

  @Column('varchar', { name: 'username', nullable: true, length: 64 })
  username: string | null;

  @Column('int', { name: 'uv', comment: '阅读数', default: () => "'0'" })
  uv: number;

  @Column('int', { name: 'up', comment: '点赞数', default: () => "'0'" })
  up: number;

  @Column('bigint', { name: 'episode_id', nullable: true, comment: '集id' })
  episodeId: string | null;

  @Column('bigint', { name: 'product_id', nullable: true, comment: '视频id' })
  productId: string | null;

  @Column('bigint', { name: 'question_id', nullable: true, comment: '问题id' })
  questionId: string | null;

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

  @Column('int', { name: 'weight', nullable: true, comment: '数字越大越靠前' })
  weight: number | null;

  @Column('int', {
    name: 'del',
    comment: '是否删除 0：未删除 1：已删除',
    default: () => "'0'"
  })
  del: number;
}
