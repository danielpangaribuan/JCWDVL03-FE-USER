import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";

import { CartProvider } from "react-use-cart";
// components
import Header from "./components/header";
import Cart from "./components/cart";
import Footer from "./components/footer";
import Carrousel from "./components/carousel";
import $ from "jquery";
// import Register from "./pages/register";
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import Payment from "./pages/payment";
// import Login from "./pages/login";
import Products from "./pages/product";
import { useDispatch } from "react-redux";
import { AuthUserKeepLogin } from "./redux/action/auth-action";
import ProductDetails from "./pages/product-detail";

function HomeProducts() {
  return <Outlet />;
}

function Main() {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AuthUserKeepLogin());
  }, []);

  return (
    <div>
      <BrowserRouter>
        <CartProvider
          id="cart"
          onItemAdd={(item) => console.log(`Item ${item.id} added!`)}
          onItemUpdate={(item) => console.log(`Item ${item.id} updated.!`)}
          onItemRemove={() => console.log(`Item removed!`)}
        >
          <Header showCart={() => setShowCart(true)} />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} /> */}
            <Route path="/product" element={<HomeProducts />}>
              <Route path="" element={<Products />} />
              <Route path="detail/:id" element={<ProductDetails />} />
            </Route>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          <Cart
            showCart={showCart}
            buttonCloseCart={() => setShowCart(false)}
          />
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default Main;
