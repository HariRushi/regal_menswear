import React,{useRef} from 'react';
import { ProductsProvider } from './context/ProductContext'; // Import the provider
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Services from './components/Services';
import Footer from './components/Footer';
import AllProductsPage from './pages/AllProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  const featuredProductsRef = useRef(null);
  return (
    <ProductsProvider> {/* Wrap your components inside the provider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero scrollRef={featuredProductsRef} />
              <FeaturedProducts ref={featuredProductsRef} />
              <Services />
            </>
          } />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/all-products" element={<AllProductsPage />} />
        </Routes>
        <Footer />
      </Router>
    </ProductsProvider>
  );
}

export default App;
