// import store from "./redux/store";
// import { createNewUser, editUser, deleteUser } from "./redux/User/User.actions";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.component";
import ProductForm from "./components/Product/ProductForm.component";
import ProductWrapper from "./components/Product/ProductWrapper.component";
import UserForm from "./components/User/UserForm.component";
import UserWrapper from "./components/User/UserWrapper.component";

class App extends React.Component {
  // componentDidMount() {
  // console.log(store);
  // store.dispatch(createNewUser("User 1"));
  // store.dispatch(createNewUser("User 2"));
  // // store.dispatch(editUser(1));
  // store.dispatch(deleteUser(0));
  // console.log(store.getState());
  // }

  // console.log(store);

  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/user" element={<UserForm />} />
          <Route path="/useredit" element={<UserWrapper />} />
          <Route path="/product" element={<ProductForm />} />
          <Route path="/productedit" element={<ProductWrapper />} />
        </Routes>
      </div>
    );
  }
}

export default App;
