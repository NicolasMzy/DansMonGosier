import type {ItemType} from "./ItemType"

export interface Item {
    label: string,
    description: string,
    photo: string,
    price: number,
    type: ItemType,
    quantity: number
}