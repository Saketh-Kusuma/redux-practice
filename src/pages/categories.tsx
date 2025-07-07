import { categories } from "@/store/categoriesSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Categories() {
  const params = useParams();
  useEffect(() => {}, [params]);
  return (
    <div className="pt-8">
      <div>{params.categoryName}</div>
    </div>
  );
}
