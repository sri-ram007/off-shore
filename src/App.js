
import Home from './Pages/Home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import Product from './Pages/Product.js';
import ProductDetail from './Pages/ProductDetails.js';
import Login from './Pages/Login.js';
import Signup from './Pages/Signup.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;