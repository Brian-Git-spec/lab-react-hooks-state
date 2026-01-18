import { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <DarkModeToggle
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="NonExistent">NonExistent</option>
      </select>

      <ProductList category={category} addToCart={addToCart} />

      <Cart cart={cart} />
    </div>
  );
}

export default App;
