import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Token} from "./token.model"
import {Block} from "./block.model"

@Entity_()
export class TokenDailyData {
  constructor(props?: Partial<TokenDailyData>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Token, {nullable: false})
  token!: Token

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  amount!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  tvl!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  dailyTradeVolume!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  dailyTradeVolumeUSD!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  dailyTxCount!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  price!: bigint | undefined | null

  @Column_("timestamp with time zone", {nullable: true})
  timestamp!: Date | undefined | null

  @Index_()
  @ManyToOne_(() => Block, {nullable: true})
  upDateTimeAtBlock!: Block | undefined | null
}
