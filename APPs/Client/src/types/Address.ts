export interface Address {
    id: string
    id_credentials: string,
    type: string,
    line_1: string,
    line_2: string,
    city: string,
    country: string,
    postcode: string,
    coordinates: [
        number,
        number
    ],
}