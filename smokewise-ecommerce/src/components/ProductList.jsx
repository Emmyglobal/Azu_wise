import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { 
    id: 1, name: "Cuban Cigarettes",
    price: 2000,
    image: "./src/assets/images/cigar.jpg"
  },
  { id: 2,
    name: "Red Wine",
    price: 5000,
    image: "./src/assets/images/wine.jpg"
  },
  { id: 3,
    name: "Lighter",
    price: 10000,
    image: "./src/assets/images/lighter.jpg" },
];

const ProductList = ({ onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;