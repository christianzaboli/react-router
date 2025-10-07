import axios from "axios"
import { useEffect, useState } from "react"

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
                <div className="card-container">

                    {products.map((product) => (
                        <div className="card" key={product.id}>
                            <img src={product.image} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>{product.price}<span>{product.category}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}