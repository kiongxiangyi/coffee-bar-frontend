import React from "react";
import { useTranslation } from "react-i18next";

const ShowOrder = ({ orderItems, onAdd, onRemove }) => {
  const { t } = useTranslation();
  return (
    <div className="block">
      <div className="background">
        <h2>{t("myOrder")}</h2>
        <div className="container">
          {orderItems.length === 0 && <h3>{t("noOrder")}</h3>}
          <div className="row">
            {orderItems.map((item) => (
              <div
                key={item.ID}
                className="d-flex justify-content-around background"
              >
                <div className="col-2 text-left">{item.Stueckliste}</div>
                <div className="marginBackground">
                  <button
                    onClick={() => onAdd(item)}
                    className="addRemove btn btn-sm"
                  >
                    +
                  </button>
                </div>
                <div className="marginBackground">
                  <button
                    onClick={() => onRemove(item)}
                    className="addRemove btn btn-sm"
                  >
                    -
                  </button>
                </div>

                <div className="col-2 text-right">
                  {t("quantity")} {item.qty}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowOrder;
