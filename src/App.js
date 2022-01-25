import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./styling/Layout.css";
import "./styling/products.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/cart" exact element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
