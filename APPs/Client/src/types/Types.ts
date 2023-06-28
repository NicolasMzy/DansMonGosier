import type {Menu} from "./Menu"
import type {Item} from "./Item"
import type {ItemType} from "./ItemType"

export interface ItemBase {
    quantity: number
}

export interface BasketMenu extends ItemBase {
    label: string,
    description: string,
    photo: string,
    price: number,
    items: Item[],
}

export interface BasketItemBase extends ItemBase {
    label: string,
    description: string,
    photo: string,
    price: number,
    type: ItemType,
    quantity: number
}

export type BasketItem = BasketItemBase | BasketMenu;
  
export interface State {
    basket: BasketItem[];
}