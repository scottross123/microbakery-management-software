export type Customer = {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    orders?: [],
}

export type Order = {
    orderTime: Date,
    pickupTime: Date,
    orderer: Customer,
}

export type Product = {
    name: string,
    description: string,
    price: number,
}

export type Ingredient = {
    name: string,
    description: string,
    cost: number,
}