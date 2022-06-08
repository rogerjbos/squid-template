import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Token} from "./token.model"
import {HourlyPool} from "./hourlyPool.model"
import {DailyPool} from "./dailyPool.model"

@Entity_()
export class Pool {
  constructor(props?: Partial<Pool>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Token, {nullable: true})
  token0!: Token | undefined | null

  @Index_()
  @ManyToOne_(() => Token, {nullable: true})
  token1!: Token | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  token0Amount!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  token1Amount!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  token0Price!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  token1Price!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  feeRate!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  feeToken0Amount!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  feeToken1Amount!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  token0TradeVolume!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  token1TradeVolume!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  tradeVolumeUSD!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  token0TVL!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  token1TVL!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  totalTVL!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  txCount!: bigint | undefined | null

  @OneToMany_(() => HourlyPool, e => e.pool)
  hourlyData!: HourlyPool[]

  @OneToMany_(() => DailyPool, e => e.pool)
  dayData!: DailyPool[]
}
