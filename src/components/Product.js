import React from "react";

export default function Product({ onAdd, product }) {
  return (
    <div className="card">
      <h3>{product.Stueckliste}</h3>
      <img className="small" src={product.Dokument1} alt={product.Stueckliste}></img>
      <div>
        <button onClick={() => onAdd(product)}>In den Warenkorb</button>
      </div>
    </div>
  );
}
