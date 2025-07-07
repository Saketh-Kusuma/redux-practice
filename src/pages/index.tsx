import { Routes, Route } from "react-router-dom";
import Categories from "./categories";
import Cart from "./cart";
import Header from "@/component/header";
import Home from "./home";
import Wishlist from "./wishlist";

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
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </section>
    </>
  );
}
