"use client";

import { useContext } from "react";
import ProductsListAPI from "./ProductsListAPI";

export function useProduct(){
    return useContext(ProductsListAPI);
}

const ProductsListAPIProvider = ({ children } : { children: React.ReactNode}) => {

    const Products = [
        { id: "prod-1", name: "Electronics Product 1", price: 101, image: "https://example.com/product-1.jpg", description: "Description for product 1", category: "Electronics", stock: 20 },
        { id: "prod-2", name: "Clothing Product 2", price: 102, image: "https://example.com/product-2.jpg", description: "Description for product 2", category: "Clothing", stock: 20 },
        { id: "prod-3", name: "Home Product 3", price: 103, image: "https://example.com/product-3.jpg", description: "Description for product 3", category: "Home", stock: 20 },
        { id: "prod-4", name: "Sports Product 4", price: 104, image: "https://example.com/product-4.jpg", description: "Description for product 4", category: "Sports", stock: 20 },
        { id: "prod-5", name: "Books Product 5", price: 105, image: "https://example.com/product-5.jpg", description: "Description for product 5", category: "Books", stock: 20 },
        { id: "prod-6", name: "Electronics Product 6", price: 106, image: "https://example.com/product-6.jpg", description: "Description for product 6", category: "Electronics", stock: 20 },
        { id: "prod-7", name: "Clothing Product 7", price: 107, image: "https://example.com/product-7.jpg", description: "Description for product 7", category: "Clothing", stock: 20 },
        { id: "prod-8", name: "Home Product 8", price: 108, image: "https://example.com/product-8.jpg", description: "Description for product 8", category: "Home", stock: 20 },
        { id: "prod-9", name: "Sports Product 9", price: 109, image: "https://example.com/product-9.jpg", description: "Description for product 9", category: "Sports", stock: 20 },
        { id: "prod-10", name: "Books Product 10", price: 110, image: "https://example.com/product-10.jpg", description: "Description for product 10", category: "Books", stock: 20 },
        { id: "prod-11", name: "Electronics Product 11", price: 111, image: "https://example.com/product-11.jpg", description: "Description for product 11", category: "Electronics", stock: 20 },
        { id: "prod-12", name: "Clothing Product 12", price: 112, image: "https://example.com/product-12.jpg", description: "Description for product 12", category: "Clothing", stock: 20 },
        { id: "prod-13", name: "Home Product 13", price: 113, image: "https://example.com/product-13.jpg", description: "Description for product 13", category: "Home", stock: 20 },
        { id: "prod-14", name: "Sports Product 14", price: 114, image: "https://example.com/product-14.jpg", description: "Description for product 14", category: "Sports", stock: 20 },
        { id: "prod-15", name: "Books Product 15", price: 115, image: "https://example.com/product-15.jpg", description: "Description for product 15", category: "Books", stock: 20 },
        { id: "prod-16", name: "Electronics Product 16", price: 116, image: "https://example.com/product-16.jpg", description: "Description for product 16", category: "Electronics", stock: 20 },
        { id: "prod-17", name: "Clothing Product 17", price: 117, image: "https://example.com/product-17.jpg", description: "Description for product 17", category: "Clothing", stock: 20 },
        { id: "prod-18", name: "Home Product 18", price: 118, image: "https://example.com/product-18.jpg", description: "Description for product 18", category: "Home", stock: 20 },
        { id: "prod-19", name: "Sports Product 19", price: 119, image: "https://example.com/product-19.jpg", description: "Description for product 19", category: "Sports", stock: 20 },
        { id: "prod-20", name: "Books Product 20", price: 120, image: "https://example.com/product-20.jpg", description: "Description for product 20", category: "Books", stock: 20 },
        { id: "prod-196", name: "Electronics Product 196", price: 296, image: "https://example.com/product-196.jpg", description: "Description for product 196", category: "Electronics", stock: 20 },
        { id: "prod-197", name: "Clothing Product 197", price: 297, image: "https://example.com/product-197.jpg", description: "Description for product 197", category: "Clothing", stock: 20 },
        { id: "prod-198", name: "Home Product 198", price: 298, image: "https://example.com/product-198.jpg", description: "Description for product 198", category: "Home", stock: 20 },
        { id: "prod-199", name: "Sports Product 199", price: 299, image: "https://example.com/product-199.jpg", description: "Description for product 199", category: "Sports", stock: 20 },
        { id: "prod-200", name: "Books Product 200", price: 300, image: "https://example.com/product-200.jpg", description: "Description for product 200", category: "Books", stock: 20 }
    ];

    return (
        <ProductsListAPI.Provider value={Products}>
            {children}
        </ProductsListAPI.Provider>
    )
}

export default ProductsListAPIProvider;