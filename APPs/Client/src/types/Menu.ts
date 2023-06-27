import type {Item} from "./Item"

export interface Menu {
    label: string,
    description: string,
    photo: string,
    price: number,
    items: Item[],
}