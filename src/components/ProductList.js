import Product from "./Product";
import React, { useEffect, useState } from "react";

const ProductList = ({ onAdd }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/drinks`) //fetch data from backend
      .then((res) => res.json())
      .then((results) => setProducts(results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="block2">
      <h2>Bitte Produkt wählen...</h2>
      <div className="container">
        <div className="row g-3">
          {products.map(
            (
              product //get each element of array products
            ) => (
              <Product key={product.ID} product={product} onAdd={onAdd} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
