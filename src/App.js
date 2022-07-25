import { useState } from "react";
import ShowOrder from "./components/ShowOrder";
import ConfirmOrder from "./components/ConfirmOrder";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { FormattedMessage, IntlProvider } from "react-intl";

function App() {
  const translation = {
    en: {
      heading: "Gühring AMB Coffee Bar",
    },
    de: {
      heading: "Gühring AMB Kaffeebar",
    },
  };

  const [locale, setLocale] = useState("de");
  const handleChange = (e) => {
    setLocale(e.target.value);
  };

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
      <select onChange={handleChange} defaultValue={locale}>
        {["en", "de"].map((x) => (
          <option key={x}>{x}</option>
        ))}
      </select>
      <IntlProvider locale={locale} messages={translation[locale]}>
        <p>
          <FormattedMessage
            id="heading"
            defaultMessage="DEFAULT MESSAGE"
            value={{ locale }}
          ></FormattedMessage>
        </p>
      </IntlProvider>
      <Header translation={translation}/>
      <ProductList onAdd={onAdd} />
      <ShowOrder onAdd={onAdd} onRemove={onRemove} orderItems={orderItems} />
      <ConfirmOrder orderItems={orderItems} setOrderItems={setOrderItems} />
    </>
  );
}

export default App;
