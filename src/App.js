import React from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./state/Context/CartContext/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
