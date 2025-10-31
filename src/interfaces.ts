export interface ProductCardType {
    product: productType;
    togglePanier: (product: productType) => void;
    panier: productType[];
};

export interface productType {
    id: number;
    category: string;
    description: string;
    price: number;
    name: string;
    img: string;
}

export interface NavBarType {
    count: number;
    panier: productType[];
}