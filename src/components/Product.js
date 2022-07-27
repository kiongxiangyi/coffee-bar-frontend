import React from "react";
import i18n from "../i18n";

export default function Product({ onAdd, product }) {
  return (
    <div className="col-6 col-xs-6 col-md-3 col-lg-2">
      <div className="card">
        <h3 className="card-title">{product.Stueckliste}</h3>
        <img
          className="card-img-top"
          src={product.Dokument1}
          alt={product.Stueckliste}
        ></img>

        <button
          className="add btn btn-primary btn-sm"
          onClick={() => onAdd(product)}
        >
          {i18n.t("basket")}
        </button>
      </div>
    </div>
  );
}
