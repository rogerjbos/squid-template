import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {UserProvision} from "./userProvision.model"
import {AddProvision} from "./addProvision.model"
import {AddLiquidity} from "./addLiquidity.model"
import {RemoveLiquidity} from "./removeLiquidity.model"
import {Swap} from "./swap.model"

@Entity_()
export class Account {
  constructor(props?: Partial<Account>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: true})
  address!: string | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  txCount!: bigint | undefined | null

  @OneToMany_(() => UserProvision, e => e.owner)
  userProvision!: UserProvision[]

  @OneToMany_(() => AddProvision, e => e.address)
  addProvision!: AddProvision[]

  @OneToMany_(() => AddLiquidity, e => e.address)
  addLiquidity!: AddLiquidity[]

  @OneToMany_(() => RemoveLiquidity, e => e.address)
  removeLiquidity!: RemoveLiquidity[]

  @OneToMany_(() => Swap, e => e.address)
  swap!: Swap[]
}
