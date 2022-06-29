import { useState } from "react";
import ShowOrder from "./components/ShowOrder";
import ConfirmOrder from "./components/ConfirmOrder";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  const [orderItems, setOrderItems] = useState([]);
  const onAdd = (product) => {
    const exist = orderItems.find((x) => x.ID === product.ID);

    if (exist) {
      setOrderItems(
        orderItems.map((x) =>
          x.ID === product.ID ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setOrderItems([...orderItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = orderItems.find((x) => x.ID === product.ID);
    if (exist.qty === 1) {
      setOrderItems(orderItems.filter((x) => x.ID !== product.ID));
    } else {
      setOrderItems(
        orderItems.map((x) =>
          x.ID === product.ID ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <>
      <Header />
      <div className="row">
        <ProductList onAdd={onAdd} />
      </div>
      <ShowOrder onAdd={onAdd} onRemove={onRemove} orderItems={orderItems} />
      <ConfirmOrder orderItems={orderItems} />
    </>
  );
}

export default App;
