import axios from "axios";
import { useEffect } from "react";
import { data } from "react-router";
import { useAppDispatch } from "@/store/hooks";
import { fetchAllProducts } from "@/store/productsSlice";
import CustomCard from "@/component/card";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
interface products {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  category: string;
  description: string;
}
export default function Home() {
  const dispatch = useAppDispatch();
  const products = useSelector((state: RootState) => state.products);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      dispatch(fetchAllProducts(data.data));
    });
  });
  return (
    <div>
      {products.list.map((product: products, index) => {
        return (
          <CustomCard
            id={product.id}
            image={product.image}
            category={product.category}
            description={product.description}
            rating={product.rating}
            title={product.title}
            price={product.price}
            key={index}
          ></CustomCard>
        );
      })}
    </div>
  );
}
