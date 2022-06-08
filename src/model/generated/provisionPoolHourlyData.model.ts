import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {ProvisionPool} from "./provisionPool.model"
import {Block} from "./block.model"

@Entity_()
export class ProvisionPoolHourlyData {
  constructor(props?: Partial<ProvisionPoolHourlyData>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => ProvisionPool, {nullable: true})
  pool!: ProvisionPool | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  token0Amount!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  token1Amount!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  price0!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  price1!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  hourlyToken0InAmount!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  hourlyToken1InAmount!: bigint | undefined | null

  @Column_("timestamp with time zone", {nullable: true})
  timestamp!: Date | undefined | null

  @Index_()
  @ManyToOne_(() => Block, {nullable: true})
  upDateTimeAtBlock!: Block | undefined | null
}
