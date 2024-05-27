import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import ProductList from './Component/ProductList';

function App() {
  const product = [
    {
      price: 99999,
      name: "iPhone 15 Pro",
      quantity: 0,
    },
    {
      price: 99999,
      name: "Realme 15 Pro",
      quantity: 0,
    }
  ]
  return (
    <>
    <Navbar/>
    <ProductList product={product}/>
    <Footer/>
    </>
  );
}

export default App;
