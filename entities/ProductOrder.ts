import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product_order', { schema: 'xdclass-edu' })
export class ProductOrder {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('bigint', { name: 'account_id', nullable: true, comment: '用户id' })
  accountId: string | null;

  @Column('varchar', {
    name: 'username',
    nullable: true,
    comment: '微信昵称',
    length: 128
  })
  username: string | null;

  @Column('varchar', {
    name: 'user_head_img',
    nullable: true,
    comment: '微信头像',
    length: 524
  })
  userHeadImg: string | null;

  @Column('varchar', {
    name: 'out_trade_no',
    nullable: true,
    comment: '商家订单唯一标识',
    length: 64
  })
  outTradeNo: string | null;

  @Column('varchar', {
    name: 'transaction_no',
    nullable: true,
    comment: '支付平台订单唯一标识',
    length: 256
  })
  transactionNo: string | null;

  @Column('varchar', {
    name: 'order_state',
    nullable: true,
    comment: 'new是新订单未支付，pay表示已支付,cancel是取消',
    length: 64
  })
  orderState: string | null;

  @Column('decimal', {
    name: 'total_amount',
    nullable: true,
    comment: '支付金额，单位分',
    precision: 11,
    scale: 2
  })
  totalAmount: string | null;

  @Column('decimal', {
    name: 'pay_amount',
    nullable: true,
    comment: '订单实际金额，单位分',
    precision: 12,
    scale: 2
  })
  payAmount: string | null;

  @Column('varchar', {
    name: 'pay_type',
    nullable: true,
    comment: '支付类型,wechat，alipay, hbfq_3,hbfq_6,hbfq_12',
    length: 64
  })
  payType: string | null;

  @Column('bigint', { name: 'product_id', nullable: true, comment: '视频主键' })
  productId: string | null;

  @Column('varchar', {
    name: 'product_type',
    nullable: true,
    comment: '商品类型，字典表',
    length: 64
  })
  productType: string | null;

  @Column('varchar', {
    name: 'product_title',
    nullable: true,
    comment: '视频名称',
    length: 128
  })
  productTitle: string | null;

  @Column('varchar', {
    name: 'product_img',
    nullable: true,
    comment: '视频图片',
    length: 256
  })
  productImg: string | null;

  @Column('varchar', {
    name: 'ip',
    nullable: true,
    comment: '用户ip地址',
    length: 64
  })
  ip: string | null;

  @Column('int', {
    name: 'is_comment',
    nullable: true,
    comment: '是否评论，0表示未评论，1表示已经评论',
    default: () => "'0'"
  })
  isComment: number | null;

  @Column('varchar', {
    name: 'discount_type',
    nullable: true,
    comment:
      '折扣类型NO 是没有，coin是D币，coupon是优惠券，vip_discount是会员折扣，new_user_welware新用户福利',
    length: 64
  })
  discountType: string | null;

  @Column('decimal', {
    name: 'discount_amount',
    nullable: true,
    comment: '折扣金额',
    precision: 12,
    scale: 2
  })
  discountAmount: string | null;

  @Column('int', {
    name: 'del',
    nullable: true,
    comment: '0表示未删除，1表示已经删除',
    default: () => "'0'"
  })
  del: number | null;

  @Column('datetime', {
    name: 'notify_time',
    nullable: true,
    comment: '支付回调时间'
  })
  notifyTime: Date | null;

  @Column('datetime', {
    name: 'gmt_create',
    nullable: true,
    comment: '订单生成时间',
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
