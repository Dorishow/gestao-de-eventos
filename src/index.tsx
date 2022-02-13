import { render } from "react-dom";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/user/Home/Home";
import Login from "./pages/user/Profile/Login"
import SignUp from "./pages/user/Profile/SignUp"

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="criar-conta" element={<SignUp/>}> </Route>
      <Route path="login" element={<Login/>}> </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);