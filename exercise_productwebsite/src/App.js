import { BrowserRouter as Router, Route, Link, Switch, Routes } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Product from './Components/Product';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Register from './Components/Register';

import Header from "./Components/Header";


function App() {
  return (

    <div>
      <Header />
      
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route path="/products" Component={Product}></Route>
        <Route path="/contact" Component={Contact}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/register" Component={Register}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
