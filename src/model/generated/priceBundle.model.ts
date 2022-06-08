import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Block} from "./block.model"
import {Token} from "./token.model"

@Entity_()
export class PriceBundle {
  constructor(props?: Partial<PriceBundle>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Block, {nullable: true})
  block!: Block | undefined | null

  @Index_()
  @ManyToOne_(() => Token, {nullable: true})
  token!: Token | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  price!: bigint | undefined | null
}
