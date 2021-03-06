import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Jumbotron from "../components/Jumbotron";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <Jumbotron />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
