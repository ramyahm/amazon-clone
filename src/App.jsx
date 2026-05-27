import "./App.css";
import "./ProductSlider.css";
import { useState } from "react";
import Header from "./components/Header";
import MainNav from "./components/NavMenu";
import HeroSection from "./components/HeroSection";
import ProductSlider from "./components/ProductSlider";
function App() {

const [cartCount, setCartCount] = useState(0);
// add to cart function
const addToCart = () => {
  setCartCount((prev) => prev + 1);
};

  return (
    <div>

      <Header cartCount={cartCount} />

      <MainNav />
     <HeroSection addToCart={addToCart} />
      <ProductSlider />

    </div>
  );
}

export default App;