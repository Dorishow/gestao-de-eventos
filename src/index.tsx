import { render } from "react-dom";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/user/Home/Home";
import Login from "./pages/user/Profile/Login"
import SignUp from "./pages/user/Profile/SignUp"
import EventDetails from "./pages/user/Events/EventDetails";
import { CartProvider } from "./context/cartContext";
import Checkout from "./pages/checkout/Checkout";

render(
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="criar-conta" element={<SignUp />}> </Route>
        <Route path="login" element={<Login />}> </Route>
        <Route path="event/:eventId" element={<EventDetails />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  </CartProvider>,
  document.getElementById("root")
);