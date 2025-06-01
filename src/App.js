import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./frontend/components/Navbar";
import Home from "./frontend/components/Home";  
import New from "./frontend/components/New";
import Products from "./frontend/components/Products";
import ProductDetail from "./frontend/components/ProductDetail"; 
import AboutSection from "./frontend/components/About";
import Footer from "./frontend/components/Footer";

const HomePage = () => (
  <>
    <Home />
    <New />
    <Products />
    <AboutSection />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<><ProductDetail /><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;
