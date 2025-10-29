import { useState } from "react";
import Products from "../data/data";
import ProductCard from "./ProductCard";
import '../styles/Filter.css';

function Filter({products, togglePanier, panier}) {
    const categories = ["All", ...new Set(products.map((product) => product.category))];

    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory);

    return (
        <>
            <div className="button-filter">
                {categories.map((category) => (
                    <button key={category} onClick={() => setSelectedCategory(category)}>{category}</button>
                ))}
            </div>
            <div className="products">
                {filteredProducts.map((product) => (
                    <ProductCard 
                    key={product.id} 
                    product={product} 
                    togglePanier={togglePanier}
                    panier={panier.some((element) => element.id === product.id)}
                    />
        ))}
            </div>
        </>
    )
}

export default Filter;