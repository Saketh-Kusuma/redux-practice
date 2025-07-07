import CustomCard from "@/component/card";
import { useAppDispatch } from "@/store/hooks";
import { fetchAllProducts, fetchCategoryProducts } from "@/store/productsSlice";
import type { RootState } from "@/store/store";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
export default function Categories() {
  const params = useParams();
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useAppDispatch();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${params.categoryName}`)
      .then((data) => {
        dispatch(fetchAllProducts(data.data));
        dispatch(fetchCategoryProducts(params.categoryName));
      });
  }, [params]);
  return (
    <div className="pt-8">
      <h2 className="text-2xl text-center font-bold mb-4 capitalize">
        {params.categoryName}
      </h2>
      <div className="grid self-center grid-flow-row xl:grid-cols-5 md:grid-cols-3 md:gap-2 sm:grid-cols-1 lg:grid-cols-3 lg:gap-4 xl:gap-4 p-2 items-center overscroll-x-none">
        {products.list.map((product: products, index) => {
          return (
            <div key={index} className="flex flex-col lg:gap-3 xl:gap-4">
              <CustomCard
                id={product.id}
                image={product.image}
                category={product.category}
                rating={product.rating}
                title={product.title}
                price={product.price}
                key={index}
              ></CustomCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}
