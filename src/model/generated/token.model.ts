import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {TokenDailyData} from "./tokenDailyData.model"
import {ProvisionPool} from "./provisionPool.model"
import {Pool} from "./pool.model"

@Entity_()
export class Token {
  constructor(props?: Partial<Token>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: true})
  name!: string | undefined | null

  @Column_("int4", {nullable: true})
  decimals!: number | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  amount!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  tvl!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  tradeVolume!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  tradeVolumeUSD!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  txCount!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  price!: bigint | undefined | null

  @Column_("int4", {nullable: true})
  poolCount!: number | undefined | null

  @OneToMany_(() => TokenDailyData, e => e.token)
  dailyData!: TokenDailyData[]

  @OneToMany_(() => ProvisionPool, e => e.token0)
  provisionPoolBase!: ProvisionPool[]

  @OneToMany_(() => ProvisionPool, e => e.token1)
  provisionPoolQuote!: ProvisionPool[]

  @OneToMany_(() => Pool, e => e.token0)
  poolBase!: Pool[]

  @OneToMany_(() => Pool, e => e.token1)
  poolQuote!: Pool[]
}
