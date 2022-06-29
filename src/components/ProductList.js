import Product from "./Product";

const ProductList = ({ products, addToOrder, onAdd }) => {
  return (
    <section className="block col-2">
      <h2>Bitte Produkt wählen...</h2>
      <div className="row">
        {products.map(
          (
            product //get each element of array products
          ) => (
            <Product key={product.id} product={product} onAdd={onAdd} />
          )
        )}
      </div>
    </section>
  );
};

export default ProductList;
