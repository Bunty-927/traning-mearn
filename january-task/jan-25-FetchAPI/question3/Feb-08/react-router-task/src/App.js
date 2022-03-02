import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About.component";
import Contact from "./components/Contact.component";
import Home from "./components/Home.component";
import ProfilePic from "./components/ProfilePic.component";
import Users from "./components/Users.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/profilepic/:id" element={<ProfilePic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
