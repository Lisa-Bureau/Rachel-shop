import { useState } from 'react';
import '../styles/NavBar.css'
import ProductPanier from './ProductPanier';

function NavBar({count, panier}) {
    const [displayPanier, setDisplayPanier] = useState(false);
    const total = panier.reduce((acc, product) => acc + product.price, 0);

    return (
        <>
            <header>
                <img src="../../public/img/logo.png" alt="Logo de la marque" />
                <nav>
                    <p>Home</p>
                    <p>Shop</p>
                    <p>Gallery</p>
                    <button onClick={() => {setDisplayPanier(!displayPanier)}}><img src="../../public/img/panier.svg" /></button>
                    <p className='number-article'>{count}</p>
                </nav>
            </header>
            <section className='panier'>
                {displayPanier && 
                    panier.map((product) => (
                    <ProductPanier key={product.id} product={product}/>
                ))}
                {displayPanier &&
                <>
                    <hr />
                    <div className='total-article'>
                        <h2>TOTAL</h2>
                        <h2>{total}€</h2>
                    </div>
                    <button>VALIDER ET PAYER</button>
                </>
                }
            </section>
        </>
    )
}

export default NavBar;