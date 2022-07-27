import React from "react";
import i18n from "../i18n";

const showOrder = ({ orderItems, onAdd, onRemove }) => {
 
  return (
    <div className="block">
      <div id="order-list">
        <h2>{i18n.t("myOrder")}</h2>
        <div className="container">
          <div>{orderItems.length === 0 && <div>{i18n.t("noOrder")}</div>}</div>
          <div className="row">
            {orderItems.map((item) => (
              <div key={item.ID} className="d-flex justify-content-between">
                <div className="col-2">{item.Stueckliste}</div>
                <div>
                  <button
                    onClick={() => onAdd(item)}
                    className="addRemove btn btn-success btn-sm"
                  >
                    +
                  </button>
                  <button
                    onClick={() => onRemove(item)}
                    className="addRemove btn btn-danger btn-sm"
                  >
                    -
                  </button>
                </div>
                <div className="col-2 text-right">{i18n.t("quantity")} {item.qty}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default showOrder;
