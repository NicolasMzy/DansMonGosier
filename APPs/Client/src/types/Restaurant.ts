import type {Menu} from "./Menu"


export interface Restaurant {
        image: string;
        restaurantName: string;
        note: string;
        drive_time: string;
        menu: Menu[];
        price: string;
    }