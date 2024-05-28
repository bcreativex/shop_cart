import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import ProductList from './Component/ProductList';

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
  return (
    <>
    <Navbar/>
    <main className='container mt-5'>
    <ProductList productList={productList}/>
    </main>
    {/* <Footer/> */}
    </>
  );
}

export default App;
