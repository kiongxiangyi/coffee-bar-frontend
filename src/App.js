import { useState } from "react";
import React from "react";
import ShowOrder from "./components/ShowOrder";
import ConfirmOrder from "./components/ConfirmOrder";
import ProductList from "./components/ProductList";
import Navigation from "./components/Navigation";
import i18n from "./i18n";
import Loading from "./components/Loading";
import LocaleContext from "./LocaleContext";
import Header from "./components/Header";
import Logo from "./components/Logo";

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

  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  return (
    <>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <React.Suspense fallback={<Loading />}>
          <Logo />
          <Navigation />
          <Header />
          <ProductList onAdd={onAdd} />
          <ShowOrder
            onAdd={onAdd}
            onRemove={onRemove}
            orderItems={orderItems}
          />
          <ConfirmOrder
            orderItems={orderItems}
            setOrderItems={setOrderItems}
            locale={locale}
          />
        </React.Suspense>
      </LocaleContext.Provider>
    </>
  );
}

export default App;
