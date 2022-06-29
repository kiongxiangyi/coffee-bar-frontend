import Product from "./Product";
import React, { useEffect, useState } from "react";

const ProductList2 = ( addToOrder, onAdd) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/drinks") //fetch data from backend
      .then((res) => res.json())
      .then((results) => setProducts(results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="block col-2">
    <h2>Bitte Produkt wählen...</h2>
    <div className="row">
      {products.map(
        (
          product //get each element of array products
        ) => (
          <Product key={product.ID} product={product} onAdd={onAdd} />
        )
      )}
    </div>
  </section>
  );
};

export default ProductList2;
