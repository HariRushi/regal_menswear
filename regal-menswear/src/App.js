import React,{useRef} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Services from './components/Services';
import Footer from './components/Footer';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  const featuredProductsRef = useRef(null);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero scrollRef={featuredProductsRef} /> {/* Pass the ref to Hero */}
            <FeaturedProducts ref={featuredProductsRef} /> {/* Use the ref in FeaturedProducts */}
            <Services />
          </>
        } />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
      </Routes>
      <Footer /> {/* Footer is now placed here and only once */}
    </Router>
  );
}

export default App;
