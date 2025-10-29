import '../styles/ProductPanier.css';

function ProductPanier({product}) {
    return (
        <article>
            <div className="product-panier">
                <div className="denomination-product">
                    <h2>{product.name}</h2>
                    <p>{product.category}</p>
                </div>
                <h2>{product.price}€</h2>
            </div>
        </article>
    )
}

export default ProductPanier;