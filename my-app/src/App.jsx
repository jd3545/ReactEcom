/*
Created by Joseph Doros
jd3545@rit.edu
*/

import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Product from "./pages/Product.jsx";
import ProductList from "./pages/ProductList.jsx";
import Register from "./pages/Register.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
};

export default App;