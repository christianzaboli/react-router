import axios from "axios"
import { useEffect, useState } from "react"

import ProductCard from "../microComps/ProductCard"
export default function ProductsPage() {
    const linkApi = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState([])
    function getProducts() {
        axios.get(linkApi)
            .then(res => setProducts(res.data))
            .catch(error => console.log(error))
    }
    console.log(products);

    useEffect(getProducts, []);
    return (
        <>
            <div className="container">
                <h1>I nostri prodotti</h1>
                <div className="row">
                    {products.map(product => (ProductCard(product)))}
                </div>
            </div>
        </>
    )
}