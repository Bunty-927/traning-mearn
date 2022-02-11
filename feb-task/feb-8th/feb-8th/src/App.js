//import logo from './logo.svg';
import './App.css';
//import user from './user.js';
import { Route, Link, Routes } from 'react-router-dom';
import Users from "./user"
import ContactUs from './contactus';
import AboutUs from './aboutus';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

const Home = () => (
  <div>
    <h1>Home Component</h1>
    <Link to="/Users">User Page..</Link><br />
    <Link to="/AboutUs">About US..</Link><br />
    <Link to="/ContactUs">Contact us..</Link>
  </div>
);

// const AboutUs = () => (
//   <div>

//   </div>
// )

// const ContactUs = () => (
//   <div>

//   </div>
// )