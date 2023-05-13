import React from "react";
import Items from "./Items";

function Products({ products }) {
  return (
    <>
      <h2>List of Products</h2>

      <div className="container-fluid mt-4 mb-3">
        <div className="row text-center">
          <Items products={products} />
        </div>
      </div>
    </>
  );
}

export default Products;
