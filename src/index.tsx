import { render } from "react-dom";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/user/Home/Home";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);