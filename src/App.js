import Home from './components/home';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import Products from './components/products';
import Cart from './components/cart';
import Navbar from './components/navbar';
import ProductDetails from './components/productDetails';
function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products/' element={<Products/>}/>
    <Route path='/products/:id' element={<ProductDetails/>}/>
    {/* <Route path='/cart' element={<Cart/>}/> */}
    {/* <Route path='/products/:id' element={<Cart/>}/> */}
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
