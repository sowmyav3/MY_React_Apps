import { BrowserRouter as Router, Route, Link, Switch, Routes } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Product from './Components/Product';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Register from './Components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Pictures';
function App() {
  return (

    <div>
      <img src="/Pictures/WebisteIcon.jpg" alt="website"></img>
      <Router>
        <ul class="nav nav-tabs">
          <li class="nav-item">
          <Link to="/">Home</Link>
          </li>
          <li class="nav-item">
          <Link to="/products">products</Link>
          </li>
          <li class="nav-item">
          <Link to="/contact">Contact_Us</Link>
          </li>
          <li class="nav-item ">
          <Link to="/login">Login</Link>
          </li>
          <li class="nav-item ">
          <Link to="/Register">Register</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route path="/products" Component={Product}></Route>
          <Route path="/contact" Component={Contact}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/Register" Component={Register}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
