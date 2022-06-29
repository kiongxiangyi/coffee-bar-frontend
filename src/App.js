import { useState } from "react";
import ShowOrder from "./components/ShowOrder";
import ProductList from "./components/ProductList";
import ConfirmOrder from "./components/ConfirmOrder";
import Header from "./components/Header";
import data from "./data";
import ProductList2 from "./components/ProductList2";

function App() {
  const { products } = data; //extract products from data
  //const [orderlist, setOrderlist] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const onAdd = (product) => {
    const exist = orderItems.find((x) => x.id === product.id);
    if (exist) {
      setOrderItems(
        orderItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setOrderItems([...orderItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = orderItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setOrderItems(orderItems.filter((x) => x.id !== product.id));
    } else {
      setOrderItems(
        orderItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  /*  const addToOrder = (order) => {
    const list = [...orderlist, order];

    setOrderlist(list);
  }; */

  return (
    <>
      <Header />
      <div className="row">
        <ProductList2 />
        {/* <ProductList onAdd={onAdd} products={products} /> */}
      </div>
      
      <ShowOrder onAdd={onAdd} onRemove={onRemove} orderItems={orderItems} />
      <ConfirmOrder />
    </>
  );
}

export default App;
