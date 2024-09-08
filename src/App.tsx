import { AiFillStar, AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import TrendingProducts from "./components/TrendingProducts";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { useState } from "react";
import Cart from "./components/Cart";

export default function App() {

  const [showCart, setShowCart] = useState(false)
  return (
   <div>
     <Provider store={store}>
        <Navbar setShowCart={setShowCart} />
        {
          showCart && <Cart showCart={setShowCart} />
        }
        <Hero />
        <Feature />
        <TrendingProducts />
        <Toaster position="bottom-center" reverseOrder={false} />
        <Footer />
     </Provider>
   </div>
  )
}