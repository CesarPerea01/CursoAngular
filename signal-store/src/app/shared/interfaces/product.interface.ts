export interface Product {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      {rate: number; count: number};
}

export enum Category {
    Electronics = "electronics",
    Jewelery = "jewelery",
    MenSClothing = "men's clothing",
    WomenSClothing = "women's clothing",
}

export interface Rating {
    rate:  number;
    count: number;
}

export interface ProductItemCart{
    product: Product,
    quantity: number
}