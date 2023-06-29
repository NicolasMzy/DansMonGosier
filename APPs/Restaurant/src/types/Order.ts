import type {Menu} from './Menu'
import type {Item} from './Item'

export interface Order {
    id_user: string,
    id_restaurant: string,
    price: number,
    number: string,
    payment: string,
    status: string,
    address: string,
    deliverer: string,
    menus: Menu[],
    items: Item[],
}