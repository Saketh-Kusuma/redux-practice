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
import { useAppDispatch } from "@/store/hooks.ts";
import { fetchAllCategoriesData } from "@/store/categoriesSlice";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
export default function Header() {
  const dispatch = useAppDispatch();
  const categories = useSelector((state: RootState) => state.categories);
  useEffect(() => {
    dispatch(fetchAllCategoriesData());
  }, []);
  const [hover, setHover] = useState(false);
  return (
    <header className="flex flex-row justify-between content-center p-4">
      <div className="text-3xl font-bold">
        <Link to="/">
          Shop<span className="text-destructive">sy</span>
        </Link>
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
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/wishlist"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <Heart
                    fill={hover ? "#FF4F0F" : "#FFFFFF"}
                    color={hover ? "#FFFFFF" : "black"}
                    size={15}
                    strokeWidth={3}
                  />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
