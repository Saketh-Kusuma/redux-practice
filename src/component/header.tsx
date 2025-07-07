import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import type { RootState } from "@/store/store";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/store/hooks.ts";
import { fetchAllCategories } from "@/store/categoriesSlice";
import { ShoppingCart } from "lucide-react";
export default function Header() {
  const dispatch = useAppDispatch();
  const categories = useSelector((state: RootState) => state.categories);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((data) => {
      dispatch(fetchAllCategories(data.data));
    });
  }, []);

  return (
    <header className="flex flex-row justify-between content-center p-4">
      <div className="text-3xl font-bold">
        Shop<span className="text-destructive">sy</span>
      </div>
      <div>
        <NavigationMenu viewport={true}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className="text-lg font-semibold">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                {categories ? (
                  <ul>
                    {categories.list.map((cat: any, index) => (
                      <li key={index}>
                        <NavigationMenuLink asChild>
                          <Link to={`/categories/${cat}`}>
                            {cat.toUpperCase()}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span>No categories</span>
                )}
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/cart">
                  <ShoppingCart color="black" size={15} strokeWidth={3} />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
