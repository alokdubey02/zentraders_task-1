import React from "react";
import ProductList from "./ProductList";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1 style={{ color: "white" }}>Product List</h1>
      <ProductList />
    </div>
  );
};

export default App;
