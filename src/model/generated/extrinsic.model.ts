import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Block} from "./block.model"
import {Account} from "./account.model"

@Entity_()
export class Extrinsic {
  constructor(props?: Partial<Extrinsic>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: true})
  hash!: string | undefined | null

  @Index_()
  @ManyToOne_(() => Block, {nullable: true})
  block!: Block | undefined | null

  @Index_()
  @ManyToOne_(() => Account, {nullable: true})
  address!: Account | undefined | null

  @Column_("text", {nullable: true})
  method!: string | undefined | null

  @Column_("text", {nullable: true})
  section!: string | undefined | null
}
