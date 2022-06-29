import React from "react";
import ProductList from "./ProductList";

const showOrder = ({ orderItems, onAdd, onRemove }) => {
  return (
    <div id="order-list" className="block col-1">
      <h2>Meine Bestellung...</h2>
      <div className="noOrder">
        {orderItems.length === 0 && <div>Keine Bestellung</div>}
      </div>
      <div>
        {orderItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
            </div>
            <div className="col-2 text-right">Menge: {item.qty}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default showOrder;
