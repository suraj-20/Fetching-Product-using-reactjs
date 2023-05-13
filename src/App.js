import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Products from "./Components/Products";

function App() {
  const [products, setProducts] = useState([]);

  // const getUsers = async () => {
  //   const response = await fetch("https://api.github.com/users");

  //   const data = await response.json();
  //   console.log(data);
  //   setUsers(data);
  // };

  useEffect(() => {
    // getUsers();
    axios.get("https://dummyjson.com/products").then(res => {
      console.log(res.data.products);
      setProducts(res.data.products);
    })
  }, []);

  return (
    <div className="App">
      <Products products={products} />
    </div>
  );
}

export default App;
