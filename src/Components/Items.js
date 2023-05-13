import React from "react";

function Items({ products }) {
  return (
    <>
      {products.map((products, index) => {
        return (
          <div className="col-10 col-md-3 " key={products.id}>
            <div className="card p-2">
              <div
                className="d-flex align-items-center direction"
                style={{ gap: "1rem" }}
              >
                <div className="image">
                  {" "}
                  <img
                    src={products.thumbnail}
                    className="rounded"
                    width={155}
                    style={{ aspectRatio: "3/2", objectFit: "contain" }}
                  />
                </div>
                <div className="ml-3 w-100">
                  <h4 className="mb-0 mt-0 textLeft">{products.brand}</h4>{" "}
                  <span className="textLeft">{products.title}</span>
                  <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                    <div className="d-flex flex-column">
                      {" "}
                      <span className="articles">Price</span>{" "}
                      <span className="number1">$ {products.price}</span>
                    </div>
                    <div className="d-flex flex-column">
                      {" "}
                      <span className="followers">Stock</span>{" "}
                      <span className="number2">{products.stock}</span>
                    </div>
                    <div className="d-flex flex-column">
                      {" "}
                      <span className="rating">Rating</span>{" "}
                      <span className="number3">{products.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Items;
