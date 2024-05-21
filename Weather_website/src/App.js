
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from "react-router-dom";
import Header from './Header';
import Farmers from './Users/Farmers/Farmers';
import Travels from './Users/Travelers/Travels';
import EventPlans from './Users/EventPlanners/EventPlans';
function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route exact path="/" component={Header}/> */}
        <Route path="/" Component={Home}></Route>
        <Route path="/eventPlan" Component={EventPlans}></Route>
        <Route path="/farmer" Component={Farmers}></Route>
        <Route path="/travel" Component={Travels}></Route>
      </Routes>
    </>

  );
}

export default App;
