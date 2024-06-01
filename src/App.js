import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import ProductList from "./Component/ProductList.js";
import React, { useState } from "react";
import Footer from "./Component/Footer.js";
import AddItem from "./Component/Additem.js";

function App() {
  let products = [
    {
      price: 109999,
      name: "iPhone 15 Pro",
      quantity: 0,
    },
    {
      price: 89999,
      name: "Samsung S23 Ultra",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;

    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
       newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index , 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name,price) => {
    let newProductList = [...productList];
    newProductList.push({
      price:price,
      name:name,
      quantity:0
    });
    setProductList(newProductList);
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
