import React from "react";
import { connect } from "dva";
import ProductList from "../components/ProductList";

const Products = ({ dispatch, products }) => {
  console.log(this.props)
  function handleDelete(id) {
    dispatch({
      type: "products/delete",
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

// export default Products;
mapstatstoprops= ({ products }) => ({
  products,
})
export default connect(mapstatstoprops)(Products);
