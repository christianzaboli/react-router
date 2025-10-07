import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function DetailProductPage() {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(error => console.log(error))

    }, []);

    return (
        <>
            <div className="card">
                <div className="cardImage">
                    <img className="static-img" src={product.image} alt={product.title} />
                </div>
                <div className="like">&hearts;</div>
                <div className="cardinfo">
                    <p>{product.title}</p>
                    <h5>{product.category}</h5>
                    <p className="price">{product.price}</p>
                </div>
            </div>
            <Link to='/products'>Torna a tutti i prodotti</Link>
        </>
    )

}