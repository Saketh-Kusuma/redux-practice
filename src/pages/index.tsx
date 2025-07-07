import { Routes, Route } from "react-router-dom";
import App from "../App";
import Categories from "./categories";
import Cart from "./cart";
import Header from "@/component/header";
import Home from "./home";

export default function Index() {
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:categoryName" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </section>
    </>
  );
}
