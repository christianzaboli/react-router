import { Link } from "react-router-dom"

function ProductCard(props) {
    return (
        <Link to={`/products/${props.id}`} key={props.id}>
            <div className="card">
                <div className="cardImage">
                    <img className="static-img" src={props.image} alt={props.title} />
                </div>
                <div className="like">&hearts;</div>
                <div className="cardinfo">
                    <p>{props.title}</p>
                    <h5>{props.category}</h5>
                    <p className="price">{props.price}</p>
                </div>
            </div>
        </Link>

    )
}
export default ProductCard