import React, { Component} from "react";
import {Route,NavLink,HashRouter,Routes} from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Product from "./components/Product";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Group from "./components/Group";
 
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/user">User</NavLink></li>
            <li><NavLink to="/product">Product</NavLink></li>
            <li><NavLink to= "/header">Header</NavLink></li>
            <li><NavLink to = "/contact">Contact</NavLink></li>
            <li><NavLink to = "/group">Group</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/user" element={<User/>}></Route>
              <Route path="/product" element={<Product/>}></Route>
              <Route path="/header" element={<Header/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/group" element={<Group/>}></Route>
              </Routes> 
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default App;