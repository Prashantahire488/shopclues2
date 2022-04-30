
import './App.css';
import {Product} from "./components/Product";
import {Men} from "./components/Men";
import {Cart} from "./components/Cart";
import {Payment} from "./components/Payment";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>   
          <Route path="/" element={<Product />} />  
          <Route path="/shopclues" element={<h1>SHOPCLUES</h1>} />   
          <Route path="/Men" element={<Men />} />   
          <Route path="/Cart" element={<Cart />} />   
          <Route path="/Payment" element={<Payment />} />        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
