import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import ProductList from "./Component/ProductList.js";
import React, { useState } from "react";

function App() {
  let products = [
    {
      price: 99999,
      name: "iPhone 15 Pro",
      quantity: 0,
    },
    {
      price: 89999,
      name: "Realme 15 Pro",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity > 0
      ? newProductList[index].quantity--
      : (newProductList[index].quantity = 0);
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </main>
      {/* <Footer/> */}
    </>
  );
}

export default App;
