import axios from "axios"
import { useEffect, useState } from "react"

export default function ProductsPage() {
    const linkApi = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState('')
    function getProducts() {axios.get(linkApi)
    .then(res => setProducts(res.data))
    .catch(error => console.log(error))
    }
    console.log(products);
    
    useEffect(getProducts, []);
    return (
        <>
        <h1>I nostri prodotti</h1>
        <div>
            {/* {products.map(product => {
                <div>
                    <img src={product.image} alt={product.title} />
                </div>
            })} */}
        </div>
        </>
    )
}