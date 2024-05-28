import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import ProductList from './Component/ProductList.js';
import Product from './Component/Product.js';
import React,{useState} from 'react';


function App() {
  const productList = [
    {
      price: 99999,
      name: "iPhone 15 Pro",
      quantity: 0,
    },
    {
      price: 89999,
      name: "Realme 15 Pro",
      quantity: 0,
    }
  ]

  let [productLists , setProductList] = useState(productList)
 
  const incrementQuantity = (index) => {
  let newProductList = [...productList]
  newProductList[index].quantity++
  setProductList(newProductList);
}

  return (
    <>
    <Navbar/>
    <main className='container mt-5'>
    <ProductList productList={productList} incrementQuantity= {this.incrementQuantity}/>
    </main>
    {/* <Footer/> */}
    </>
  );
}

export default App;
