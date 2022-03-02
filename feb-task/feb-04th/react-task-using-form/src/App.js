import "./App.css";
import CreateNewUser from "./components/CreateNewUser.component";
import UserList from "./components/UserList.component";

function App() {
  return (
    <div className="App">
      <CreateNewUser />
      <UserList />
    </div>
  );
}

export default App;
