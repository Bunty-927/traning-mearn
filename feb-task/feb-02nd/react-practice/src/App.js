import "./App.css";
import Product from "./components/Product.component";
import User from "./components/User.component";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false);
  const [product, setProduct] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setUser(true);
          setProduct(false);
        }}
      >
        Show user data
      </button>
      <button
        onClick={() => {
          setProduct(true);
          setUser(false);
        }}
      >
        Show product data
      </button>

      <div>
        {/* show data here */}
        {user ? <User /> : ""}
        {product ? <Product /> : ""}
      </div>
    </div>
  );
}

export default App;
