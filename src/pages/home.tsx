import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { fetchAllProductsData, getAllProducts } from "@/store/productsSlice";
import CustomCard from "@/component/card";
import { useSelector } from "react-redux";
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
  const products = useSelector(getAllProducts);
  useEffect(() => {
    dispatch(fetchAllProductsData());
  }, []);
  return (
    <>
      <div
        className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden"
        style={{
          backgroundImage: "url(/shopping.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div>
          <div className="@container min-h-screen w-full overscroll-x-none">
            <div className="@[480px]:p-4">
              <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10">
                <div className="flex flex-col gap-2 text-left">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Elevate Your Style
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    Discover the latest trends in fashion and accessories.
                  </h2>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#e8b4b7] text-[#171212] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                  <span className="truncate">Shop Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="h-5 bg-white"></div>
        </div>
      </div>
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
    </>
  );
}
