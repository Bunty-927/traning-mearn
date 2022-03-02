import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser.component";
import NavBar from "./components/Navbar.component";
import UserList from "./components/UserList.component";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<AddUser />} />
        <Route exact path="/userlist" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
