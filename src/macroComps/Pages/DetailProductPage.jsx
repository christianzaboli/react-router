import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SinglDetailProductPageePage() {
    const { id } = useParams()
    const linkApi = 'https://fakestoreapi.com/products'
    useEffect(() => {
        axios.get(linkApi)

    })
    return (
        <div>404</div>
    )
}