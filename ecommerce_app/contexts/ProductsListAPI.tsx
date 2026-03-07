"use client";

import { createContext } from 'react';

type Products = {
    id: string,
    name: string,
    price: number,
    image: string,
    description: string,
    category: string,
    stock: number
}
const ProductsListAPI = createContext<Products[]>([]);

export default ProductsListAPI;