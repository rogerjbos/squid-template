import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Token} from "./token.model"
import {Block} from "./block.model"
import {Extrinsic} from "./extrinsic.model"

@Entity_()
export class ListProvision {
  constructor(props?: Partial<ListProvision>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Token, {nullable: true})
  pool!: Token | undefined | null

  @Index_()
  @ManyToOne_(() => Token, {nullable: true})
  token0!: Token | undefined | null

  @Index_()
  @ManyToOne_(() => Token, {nullable: true})
  token1!: Token | undefined | null

  @Index_()
  @ManyToOne_(() => Block, {nullable: true})
  block!: Block | undefined | null

  @Index_()
  @ManyToOne_(() => Extrinsic, {nullable: true})
  extrinsic!: Extrinsic | undefined | null

  @Column_("timestamp with time zone", {nullable: true})
  timestamp!: Date | undefined | null
}
