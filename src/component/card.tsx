import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
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
export default function CustomCard({
  id,
  image,
  title,
  price,
  rating,
  category,
  description,
}: products) {
  return (
    <Card>
      <CardHeader>
        <img src={image} width={150} height={100} />
      </CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardContent>
        <div>{price}</div>
        <div>{rating.rate}</div>
        <div>{category}</div>
      </CardContent>
      <CardFooter>
        <Button>Add to cart</Button>
        <Button>Wishlist</Button>
      </CardFooter>
    </Card>
  );
}
