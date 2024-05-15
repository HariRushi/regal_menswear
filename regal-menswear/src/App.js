import React, { useRef, useEffect } from "react";
import { ProductsProvider } from "./context/ProductContext"; // Import the provider
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Services from "./components/Services";
import About from "./components/About";
import MeetTheTeam from "./components/MeetTheTeam";
import Footer from "./components/Footer";
import AllProductsPage from "./pages/AllProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  const featuredProductsRef = useRef(null);
  const aboutRef = useRef(null);
  const meetTeamRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    document.title = "Regal Menswear";
  }, []);
  return (
    <ProductsProvider>
      {" "}
      {/* Wrap your components inside the provider */}
      <Router>
        <Navbar aboutRef={aboutRef} meetTeamRef={meetTeamRef} contactRef={contactRef} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero scrollRef={featuredProductsRef} />
                <FeaturedProducts ref={featuredProductsRef} />
                <Services />
                <About ref={aboutRef}/>
                <MeetTheTeam meetTeamRef={meetTeamRef}/>
                <Footer contactRef={contactRef}/>
              </>
            }
          />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/all-products" element={<AllProductsPage />} />
        </Routes>
      </Router>
    </ProductsProvider>
  );
}

export default App;
