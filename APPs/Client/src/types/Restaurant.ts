import type {Menu} from "./Menu"
import type {Item} from "./Item"
import type {Rate} from "./Rate"
import type {Address} from "./Address"


export interface Restaurant {
    id_credentials: string,
    name: string,
    photo: string,
    schedule: string,
    id_address: string,
    category: string,
    mean_rate: number,
    rates: Rate[],
    menu: Menu[],
    item: Item[],
    address: Address,
}