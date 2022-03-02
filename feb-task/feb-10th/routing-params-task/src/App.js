import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactUs from "./components/ContactUs.component";
import EditGroup from "./components/EditGroup.component";
import EditProduct from "./components/EditProduct.component";
import EditUser from "./components/EditUser.component";
import Grouplist from "./components/Grouplist.component";
import Header from "./components/Header.component";
import Homepage from "./components/Homepage.component";
import Productlist from "./components/Productlist.component";
import Userlist from "./components/Userlist.component";
import jsonToLocalStorage from "./helper/jsonToLocalStorage";

function App() {
  jsonToLocalStorage();
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/*" element={<Homepage />} />
        <Route exact path="/grouplist" element={<Grouplist />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/productlist" element={<Productlist />} />
        <Route exact path="/userlist" element={<Userlist />} />
        <Route exact path="/edituser" element={<EditUser />} />
        <Route exact path="/editproduct" element={<EditProduct />} />
        <Route exact path="/editgroup" element={<EditGroup />} />
      </Routes>
    </div>
  );
}

export default App;
