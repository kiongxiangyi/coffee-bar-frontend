import React from "react";

const showOrder = ({ orderItems, onAdd, onRemove }) => {
  return (
    <div id="order-list" className="block col-1">
      <h2>Meine Bestellung...</h2>
      <div className="noOrder">
        {orderItems.length === 0 && <div>Keine Bestellung</div>}
      </div>
      <div>
        {orderItems.map((item) => (
          <div key={item.ID} className="row">
            <div className="col-2">{item.Stueckliste}</div>
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
