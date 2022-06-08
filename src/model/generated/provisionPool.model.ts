import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Token} from "./token.model"
import {Block} from "./block.model"
import {ProvisionPoolHourlyData} from "./provisionPoolHourlyData.model"
import {UserProvision} from "./userProvision.model"

@Entity_()
export class ProvisionPool {
  constructor(props?: Partial<ProvisionPool>) {
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
  initializeShare!: bigint | undefined | null

  @Column_("timestamp with time zone", {nullable: true})
  startAt!: Date | undefined | null

  @Index_()
  @ManyToOne_(() => Block, {nullable: true})
  startAtBlock!: Block | undefined | null

  @Column_("timestamp with time zone", {nullable: true})
  endAt!: Date | undefined | null

  @Index_()
  @ManyToOne_(() => Block, {nullable: true})
  endAtBlock!: Block | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  txCount!: bigint | undefined | null

  @OneToMany_(() => ProvisionPoolHourlyData, e => e.pool)
  hourlyData!: ProvisionPoolHourlyData[]

  @OneToMany_(() => UserProvision, e => e.pool)
  userProvisions!: UserProvision[]
}
