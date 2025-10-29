import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Products from './data/data'
import Filter from './components/Filter'
import Footer from './components/Footer'

function App() {
  const [panier, setPanier] = useState([]); // panier = tableau qui contient les produits ajoutés / setPanier = fonction qui permet de modifier le panier 
  
  // on crée une fonction qui s'appelle newPanier pour pouvoir le mettre à jour selon un nouvel Article (newArticle)
  function newPanier(newArticle) { 
    // on met à jour le panier en se basant sur sa valeur actuelle
    setPanier((currentPanier) => {
      // On vérifie si le nouvel article correspond à un produit qui serait déjà dans le panier 
      const isInPanier = currentPanier.some((product) => product.id === newArticle.id);

      if(isInPanier) {
        // L'article est déjà dans le panier actuel donc on le filtre, en ne gardant que les produits qui ont un id différent de celui de l'article
        return currentPanier.filter((product) => product.id !== newArticle.id);
      } else {
        // Le nouvel article n'est pas dans le panier actuel (currentPanier) donc on l'ajoute à la fin de celui-ci
        return [...currentPanier, newArticle];
      }
    });
  };

  return (
    <>
      <NavBar count={panier.length} panier={panier}/>
      <section className='shop'>
        <Filter 
        products={Products}
        togglePanier={newPanier}
        panier={panier} // renvoi true si le produit est déjà dans le panier ou false si il n'y est pas  
        //togglePanier={() => newPanier(Products)} // appelle la fonction newPanier avec comme paramètre un produit de la base de données
        />
        
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
