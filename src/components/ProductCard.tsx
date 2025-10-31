import type { ProductCardType } from '../interfaces';
import '../styles/ProductCard.css';

function ProductCard({product, togglePanier, panier} : ProductCardType) {
    return (
        <article className="product-card">
            <img src={product.img} alt="" />
            <div className="important-info">
                <div className='name-category'>
                    <h2>{product.name}</h2>
                    <p>{product.category}</p>
                </div>
                <h2>{product.price}€</h2>
            </div>
            <p>{product.description}</p>
            <button onClick={() => togglePanier(product)}> {/* togglePanier est appelé et exécute la fonction newPanier, le panier est mis à jour (ajout ou suppression du produit */}
                {panier ? "SUPPRIMER" : "AJOUTER"} {/* si panier vaut true (le produit est déjà dans le panier) alors j'affiche "supprimer" sinon l'inverse */}
            </button>
        </article>
    )
}

export default ProductCard;