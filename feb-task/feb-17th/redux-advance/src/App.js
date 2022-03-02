import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Calculator from "./components/Calculator.component";
import Dashboard from "./components/Dashboard.component";
import GetData from "./components/GetData.component";
import Header from "./components/Header.component";
// import UserLogin from "./components/UserLogin.component";
import UserWrapper from "./components/UserWrapper.component";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Calculator /> */}
        <Header />
        <Routes>
          <Route exact path="/calculator" element={<Calculator />} />
          <Route exact path="/login" element={<UserWrapper />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/getdata" element={<GetData />} />
        </Routes>
      </div>
    );
  }
}

export default App;
